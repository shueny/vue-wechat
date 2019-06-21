const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
// 引入 passport
const passport = require("passport");

// 引入 users.js/profile.js
const users = require("./routers/api/uers");
const profile = require("./routers/api/profile");

// DB config
const db = require("./config/keys").mongoURI;

// 使用 body-parser 中間件(middleware)
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(
        db,
        { useNewUrlParser: true }
        )
        .then(() => console.log("MongoDB Connected."))
        .catch(err => console.log(err));

// passport 初始化
app.use(passport.initialize());
require("./config/passport")(passport);

// app.get("/",(req,res) => {
//     res.send("Hello World!");
// })

// 使用 routers
app.use("/api/users", users);
app.use("/api/profile", profile);


const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})