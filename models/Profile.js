const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema ({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    img: {
       type: String,
       required: true
    },
    name: {
       type: String,
       required: true
    },
    text: {
       type: String,
       required: true
    },
    imgs: {
       type: [String],
       required: true
    },
    date: {
        type: Date,
        drfault: Date.now
    }
})

module.exports = User = mongoose.model("profile", ProfileSchema);