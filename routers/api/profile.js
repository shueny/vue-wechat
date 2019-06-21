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


module.exports = router;