const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const previousSchema = new Schema({
    name: String,
    APIId: String
})


module.exports = mongoose.model("Previous", previousSchema);
