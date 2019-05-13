// @login & register
// 首先引入 express，擁有對應的 router，再做 router 的指向
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const gravatar = require("gravatar");

const User = require("../../models/User");

// $router GET api/users/test
// @desc 返回請求的 json 數據
// @access(是一個公開還是私有的接口，若要返回一個 token 就是一個私有的接口) public
router.get("/test", (req, res) => {
    res.json({msg: "login works"})
})

// $router POST api/users/register
// @desc 返回請求的 json 數據
// @access(是一個公開還是私有的接口，若要返回一個 token 就是一個私有的接口) public
router.post("/register", (req, res) => {
    // console.log(req.body);

    // 查詢資料庫中是否有此 email (檢查email是否被註冊過)
    User.findOne({email: req.body.email})
        .then((user) => {
            if (user) {
                return res.status(400).json({email: "Email已被註冊過"})
            } else {
                const avatar = gravatar.url(req.body.email, {s: '200', r: 'pg', d: 'mm'});

                const newUser = new User ({
                    name: req.body.name,
                    email: req.body.email,
                    avatar,
                    password: req.body.password
                })

                // 加密處理
                // saltRounds: 一種加密的模式
                // myPlaintextPassword: 要給誰加密?
                // hash: 加密後的密碼
                bcrypt.genSalt(10, function(err, salt) {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;

                        newUser.password = hash;

                        newUser.save()
                                .then(user => res.json(user))
                                .catch(err => console.log(err));
                    });
                });
            }
            
        })
});

module.exports = router;