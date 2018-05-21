const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(bodyParser.json());
//mongoose.connect("mongodb://<dbuser>:<dbpassword>@ds119800.mlab.com:19800/vschoolfinal555"), (err) => {
//mongoose.connect("mongodb://<dbuser>:<dbpassword>@ds119800.mlab.com:19800/vschoolfinal555", (err) => {
mongoose.connect("mongodb://localhost/CoinmktcapAPI", (err) => {
    if (err) throw err;
    console.log("So, How does it feel to be one of the beautiful people connected to the freshest Mongo database? At this time you are quite well connected");
})
app.use("/coins", require("./routes/coins"));

app.listen(4000, () => {
    console.log("Coinz is brought to you today by Pennzoil and is at this time running pretty smooth on 3000");
})
