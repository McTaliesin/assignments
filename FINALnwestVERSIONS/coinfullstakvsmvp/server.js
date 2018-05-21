const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(bodyParser.json());
//mongoose.connect("mongodb://<dbuser>:<dbpassword>@ds119800.mlab.com:19800/vschoolfinal555"), (err) => {
mongoose.connect("mongodb://localhost/CoinmktcapAPI", (err) => {
    if (err) throw err;
    console.log("You are now Connected to the Freshest Mongo database");
})
app.use("/coins", require("./routes/coins"));

app.listen(4000, () => {
    console.log("Coinz is running smooth on 3000");
})
