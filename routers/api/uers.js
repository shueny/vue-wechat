// @login & register
// 首先引入 express，擁有對應的 router，再做 router 的指向
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt"); // 引用加密
const gravatar = require("gravatar");
const jwt = require('jsonwebtoken');
const keys = require("../../config/keys");
const passport = require("passport");

const User = require("../../models/User");

// $router GET api/users/test
// @desc 返回請求的 json 數據
// @access(是一個公開還是私有的接口，若要返回一個 token 就是一個私有的接口) public
router.get("/test", (req, res) => {
    res.json({ msg: "login works" })
})

// $router POST api/users/register
// @desc 返回請求的 json 數據
// @access(是一個公開還是私有的接口，若要返回一個 token 就是一個私有的接口) public
// 填入欄位: email, name, password (shuen29@gmail.com, shueny, 111222)
router.post("/register", (req, res) => {
    // console.log(req.body);

    // 查詢資料庫中是否有此 email (檢查email是否被註冊過)
    User.findOne({ email: req.body.email })
        .then((user) => {
            if (user) {
                // return res.status(400).json({email: "Email已被註冊過"})
                return res.status(400).json("Email已被註冊過")
            } else {
                const avatar = gravatar.url(req.body.email, { s: '200', r: 'pg', d: 'mm' });

                const newUser = new User({
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
                        if (err) {
                            throw err;
                        }

                        newUser.password = hash;

                        newUser.save()
                            .then(user => res.json(user))
                            .catch(err => console.log(err));
                    });
                });
            }
        })
})

// $router POST api/users/login
// @desc 返回 token jwt passport
// @access public
// 填入欄位: email, password (test0522@gmail.com, 1234566)
router.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email })
        .then(user => {
            if (!user) {
                // return res.status(404).json({ email: "用戶不存在"});
                return res.status(404).json({ email: "用戶不存在" });
            }
            // 判斷密碼是否正確
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        // 使用：jwt.sign("規則", "加密名字", "過期時間", "箭頭函數")
                        // keys 先在 config/keys 中設定好
                        const rule = { id: user.id, name: user.name, avatar: user.avatar }; // 也可以加上 email & avatar
                        jwt.sign(rule, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                                if (err) {
                                    throw err;
                                }
                                res.json({
                                    success: true,
                                    token: "Bearer " + token
                                })
                            })
                            // res.json({msg: "success"});
                    } else {
                        // return res.status(400).json({password: "密碼錯誤"});
                        return res.status(400).json({ password: "密碼錯誤" });
                    }
                })
        })
})

// $router GET api/users/current
// @desc return current user
// @access Private
router.get("/current", passport.authenticate("jwt", { session: false }), (req, res) => {
    // res.json(req.user);
    res.json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email,
        avatar: req.user.avatar
    })
})

module.exports = router;