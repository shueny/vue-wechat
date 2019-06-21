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

module.exports = router;