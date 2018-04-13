const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        lowercase: true,
        type: String,
        unique: true,
        required: true
    },

    pasword: {
        type: String,
        required: true,

    },
    isAdmin; {
        type: Boolean,
        default: false

    }
})
