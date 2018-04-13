code below works so don't mess with it Mr. McTaliesin


const axios = require("axios");

const promise = axios.get("https://swapi.co/api/people/1").then(response => {
  const people =response.data;
  console.log(people);

});

console.log("I'm synchronous");

<!-- *******

const axios = require("axios");

axios.get("https://swapi.co/api/people/1")
  .then(response => {
    luke = response.data;
    return axios.get(response.data.homeworld);

  })
  .then(response => {
    luke.homeworld = response.data.name;
    return axios.get(response.data.residents[1]);
  })
  .then(response => {
    luke.bestFriend = response.data.name;
    console.log(luke);

  });
  luke = response.data;
  return axios.get(response.data.homeworld);

  })
  .then(response => {
  luke.homeworld = response.data.name;
  return axios.get(response.data.residents[1]);
  })
  .then(response => {
  luke.bestFriend = response.data.name;
  console.log(luke);
  .then(response => {
  throw new Error("this is in error");
  console.log("3")

  })
  .catch(err => {
  console.log(err.message);
  });


*******

luke = response.data;
return axios.get(response.data.homeworld);

})
.then(response => {
luke.homeworld = response.data.name;
return axios.get(response.data.residents[1]);
})
.then(response => {
luke.bestFriend = response.data.name;
console.log(luke);
.then(response => {
throw new Error("this is in error");
console.log("3")

})
.catch(err => {
console.log(err.message);
});

******* -->
