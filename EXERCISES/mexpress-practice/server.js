const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json())

const teeth = [
  {id : 1, type: "molar - wisdom"},
  {id : 2, type: "molar"},
  {id : 3, type: "molar"},
  {id : 4, type: "molar"},
  {id : 5, type: "molar"},
  {id : 6, type: "molar"},
  {id : 7, type: "canine"},

]


app.get("/teeth", (req, res) => {
console.log(req.params);
    teeth,.find(tooth => tooth.id === req.params.id)
    const foundTooth = teeth.find(tooth => tooth.id === req.params.id);
    return 
});

app.post("/teeth", (req,res) => {
    req.body.id = uuid();
    teeth.push(req.body);
    return res.send(req.body);
});

app.listen(7000, () => {
  console.log("Server is running onm port 7000");
});
