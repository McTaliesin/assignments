var ask = require("readline-sync");

var options = ['pick flowers', 'shoot guns', 'fight bears', 'cancel'];
var decision = 'undecided';

while(options[index] !== 'fight bears') {
    index = ask.keyInSelect(options, "What would you like to do today?: ");
    if(options[index] === 'pick flowers') {
      console.log("You pick some flowers. You make a bouquet.");
    } else if (options[index] === 'shoot guns') {
      console.log("You shoot guns.");
    } else if (index === -1) {
      console.log("Select an option");
    
    }
}

console.log("You fought a bear and got beat up!");
