// @login & register
// 首先引入 express，擁有對應的 router，再做 router 的指向
const express = require("express");
const router = express.Router();
const passport = require("passport");

const Profile = require("../../models/Profile");

// $router GET api/profile/test
// @desc 返回請求的 json 數據
// @access(是一個公開還是私有的接口，若要返回一個 token 就是一個私有的接口) public
router.get("/test", (req, res) => {
    res.json({msg: "profiles works"})
})

// $router POST api/profile/add (收前端來的請求)
// @desc 創建朋友圈訊息接口
// @access private
// Postman 測試：先 login 取的 token，再用 token
router.post("/add", passport.authenticate("jwt", {session: false}), (req, res) => {
    const profileFields = {};
    // 測是是否有資料回傳
    if (req.body.img) profileFields.img = req.body.img;
    if (req.body.name) profileFields.name = req.body.name;
    if (req.body.text) profileFields.text = req.body.text;

    // 多張圖片 "img1|img2|img3"
    if (req.body.imgs) {
        profileFields.imgs = req.body.imgs.split("|");
    }

    // 儲存資料
    new Profile(profileFields).save().then(Profile => {
        res.json(Profile);
    })
})

// $router GET api/profile/latest
// @desc 下拉刷新接口
// @access private
// 前三筆、有其他人發布新訊息時
router.get("/latest", passport.authenticate("jwt", {session: false}), (req, res) => {
    Profile.find()
        .sort({ date: -1 }) // -1 為倒敘的意思
        .then(profiles => {
            if (!profiles) {
                res.status(404).json('沒有任何訊息!');
            } else {
                // res.json(profiles); // 取得所有數據
                // 只取最新的 3 筆資料
                let newProfiles = [];
                for( let i = 0; i < 3; i++) {
                    if(profiles[i] != null) {
                        newProfiles.push(profiles[i]);
                    }
                }
                res.json(newProfiles);
            }
        })
})

// $router GET api/profile/:page/:size
// @desc 上拉加載的接口
// @access private
// 10條、下拉刷新(請求)3 條、上拉加載(請求)3 條
// page: 現在的位置 (是在第3條還是第6條)
// size: 再加載幾條?
router.get("/:page/:size", passport.authenticate("jwt", {session: false}), (req, res) => {
    Profile.find()
        .sort({ date: -1 })
        .then(profiles => {
            if(!profiles) {
                res.status(404).json('沒有任何訊息!');
            } else {
                let size = req.params.size;
                let page = req.params.page;
                let index = size * (page - 1);
                let newProfiles = [];
                for (let i = index; i < size * page; i++) {
                    if(profiles[i] != null) {
                        newProfiles.unshift(profiles[i]);
                    }
                }
                res.json(newProfiles);
            }
        })
})

module.exports = router;