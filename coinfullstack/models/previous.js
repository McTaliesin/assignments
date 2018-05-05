const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
    name: String,
    APIId: String
})


module.exports = mongoose.model("Previous", previousSchema);
