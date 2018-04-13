const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: true
    },
    user: {
        type: Schema.Type.ObjectId,
        ref: "User",
        required: true
    }
});

module.exports = mongoose.model("Todo"), todoSchema);
