const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/datadb');
const Schema = mongoose.Schema;

const coinSchema = new Schema({
  name: String,
  symbol: String,
  price_usd: Number,
  price_btc: Number,
  rank: Number
});
const Coin = mongoose.model('Coin', coinSchema);
const myCoin = new Coin({
  name: 'Bitcoin',
  symbol: 'BTC',
  price_usd: 10,
  price_btc: 10
});

myCoin.save((err, new_coin) => {
 console.log(new_coin);
});

// Coin.find({price_usd: 10 }, (err, coins) => {
//   console.log(coins);
// });
//
//
// Coin.findOne({symbol: 'BTC' }, (err, coin) => {
//   console.log(coin);
// });
//
// Coin.findOne({name: 'Bitcoin' }, (err, coin) => {
//   coin.price_usd++;
//   coin.save((err, new_coin) => {
//     console.log(new_coin);
//   });
// });
//
// Coin.findOne({name: 'Bitcoin' }, (err, coin) => {
//   coin.remove(err => {
//     console.log('Bitcoin is gone');
//   });
// });
