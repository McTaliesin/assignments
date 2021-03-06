const MongoClient = require('mongodb').MongoClient;

const MONGO_URL = 'mongodb://<dbuser>:<dbpassword>@ds119800.mlab.com:19800/vschoolfinal555';

const express = require('express');
const app = express();

app.listen(3000, function() {
  console.log('listening on 3000')
})

MongoClient.connect(MONGO_URL, (err, db) => {
  if (err) {
    return console.log(err);
  }

  // Do something with db here, like inserting a record
  db.collection('notes').insertOne(
    {
      title: 'Hello MongoDB',
      text: 'Hopefully this works!'
    },
    function (err, res) {
      if (err) {
        db.close();
        return console.log(err);
      }
      // Success
      db.close();
    }
  )
});
