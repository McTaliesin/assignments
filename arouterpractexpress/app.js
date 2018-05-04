const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
var myLogger = function (req, res, next) {
  console.log('LOGGED');

}

// Routes for 'fruits'
app.get("/fruit", (req, res) => {
    res.send("GET on /fruit endpoint");
});

app.post("/fruit", (req, res) => {
    res.send("POST on /fruit endpoint");
});

app.get("/fruit/:fruitId", (req, res) => {
    res.send(`GET on /fruit/${req.params.fruitId} endpoint`);
});

app.put("/fruit/:fruitId", (req, res) => {
    res.send(`PUT on /fruit/${req.params.fruitId} endpoint`);
});

app.delete("/fruit/:fruitId", (req, res) => {
    res.send(`DELETE on /fruit/${req.params.fruitId} endpoint`);
});


// Routes for 'vegetables'
app.get("/vegetable", (req, res) => {
    res.send("GET on /vegetable endpoint");
});

app.post("/vegetable", (req, res) => {
    res.send("POST on /vegetable endpoint");
});

app.get("/vegetable/:vegetableId", (req, res) => {
    res.send(`GET on /vegetable/${req.params.vegetableId} endpoint`);
});

app.put("/vegetable/:vegetableId", (req, res) => {
    res.send(`PUT on /vegetable/${req.params.vegetableId} endpoint`);
});

app.delete("/vegetable/:vegetableId", (req, res) => {
    res.send(`DELETE on /vegetable/${req.params.vegetableId} endpoint`);
});

// Run the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`,myLogger());
});
