
var rl = require("readline-sync");
var alive = true;
var p1 = rl.question('What is your name? ');
console.log('Hello ' + p1 + ' You find yourself locked in a room');
  var hasKey = false;
  while(alive === true){

    while (hasKey === false){
console.log("Choose your move");
      var choices = ['Put your hand in a hole', 'Find the key', 'Open the door'];

       index = rl.keyInSelect("What would you like to do? Enter the number of your choice");
      console.log('Ok, so you ' + choices[index] + '');
        if (index === choices[0]) {
          console.log('Because you ' + [0] + ' you die ' + p1 +', just like that');
          alive === false;
          break;
        }
        if (index === choices[1]) {
          console.log('You ' + [1] + p1 + ' now choose your next move');
          hasKey = true;
        }
        if (index === choices[2]) {
          if(hasKey){
            console.log('Free at last, Free at last, good job ' + p1 + 'YOU WON THE GAME, NOW GO EXPLORE AND DO GOOD IN THE WORLD')
            break;
        } else {
          console.log('You tried to ' + [2] + 'but without a key are unsuccessful, choose again ');
          continue;
        }
        }

console.log("I hope you had fun playing this simple game that made me want to pull my hair out. It was good for me though!")
   }
 }
