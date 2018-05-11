console.log("may the Salt Lake Node be with you today and every day");
const express = require('express');
const bodyParser= require('body-parser');
const app = express();

app.set('view engine', 'ejs')
res.render(view, locals)
app.use(bodyParser.urlencoded({extended: true}))
app.listen(3000, function () {
  console.log('listening on 3000');
})

app.get('/', (req, res) => {
  var cursor = db.collection('quotes').find()
})

console.log(__dirname);
app.post('/quotes', (req, res) => {
  db.collection('quotes').find().toArray(function(err, results) {
    console.log(results)
  })
  console.log(req.body);
})

const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://<dbuser>:<dbpassword>@ds119800.mlab.com:19800/vschoolfinal555', (err, client) => {
  if (err) return console.log(err)
  db = client.db('star-wars-quotes')
  app.listen(3000, () => {
    console.log('now listening on port 3000')
  })
})
