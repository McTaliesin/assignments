const axios = require("axios");
//const topten = [0,1,2,3,4,5,6,7,8,9];
const promise = axios.get("https://api.coinmarketcap.com/v1/ticker/").then(response => {
    const coin = response.data;
    for (var i = 0; i < 8; i++) {}
    console.log(coin[i].name);
}
});

//     console.log("I'm synchronous");
// axios.get("https://api.coinmarketcap.com/v1/ticker/")
//   .then(response => {
//       coin.price = response.data;
//       return axios.get(response.data.price_usd);
//       console.log(coin[0,1,2,3,4,5,6,7,8,9].price);
//   });
//   .then(response => {
//       coin.market = response.data.market_cap_usd;
//       return axios.get(response.data.market_cap_usd);
//       console.log(coin[0,1,2,3,4,5,6,7,8,9].market;
//   });
