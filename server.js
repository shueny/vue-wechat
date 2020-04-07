const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
// 引入 passport
const passport = require("passport");

// 引入 users.js/profile.js
const users = require("./routers/api/uers");
const profiles = require("./routers/api/profile");

// DB config
const db = require("./config/keys").mongoURI;

// 使用 body-parser 中間件(middleware)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: '50mb' })); // nodejs 做爲服務器，在傳輸內容或者上傳文件時，系統默認大小爲100kb，需修改系統限制，改為50mb。
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// Connect to MongoDB
mongoose.connect(
        db, { useNewUrlParser: true }
    )
    .then(() => console.log("MongoDB Connected."))
    .catch(err => console.log(err));

// 使用此方法(後端請求)等於誰都可以使用，會有安全性問題
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
//     next();
// })

// passport 初始化
app.use(passport.initialize());
require("./config/passport")(passport);

// app.get("/",(req,res) => {
//     res.send("Hello World!");
// })

// 使用 routers
app.use("/api/users", users);
app.use("/api/profiles", profiles);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})