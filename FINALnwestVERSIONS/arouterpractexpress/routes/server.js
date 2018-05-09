//server.js

const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

var requestTime = function (req, res, next) {
  req.requestTime = Date.now()
  next()
}

app.use(requestTime)

app.get('/', function (req, res) {
  var responseText = 'Hello World!<br>'
  responseText += '<small>Requested at: ' + req.requestTime + '</small>'
  res.send(responseText)
})
// You can skip a step by requiring the modules inline like so.
// It works to do the require on its own line as well, it's up to you.
app.use("/fruit", require("./routes/fruitRoutes"));
app.use("/vegetable", require("./routes/vegetableRoutes"));

// Run the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
