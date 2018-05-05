const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/Coinz", (err) => {
    if (err) throw err;
    console.log("Connected to the Mongo database");
})


// app.use("/auth", require("./routes/auth"));
app.use("/books", require("./routes/books"));

app.listen(4000, () => {
    console.log("Coinz is running on 3000");
})
