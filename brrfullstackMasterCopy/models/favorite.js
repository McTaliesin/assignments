const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
    title: String,
    APIId: String
})


module.exports = mongoose.model("Favorite", favoriteSchema);
