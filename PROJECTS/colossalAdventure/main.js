var readlineSync = require("readline-sync");
var rl = readlineSync;
var gameOver = false;
function Enemy(name, health) {
    this.name = name;
    this.health = health;
}
var Sloth = new Enemy("Slothfello", 23);
var Wrath = new Enemy("Wrathful1", 33);
var Envy = new Enemy("Dearth Envious", 40);
var enemiesList = [Sloth, Wrath, Envy];

console.log("Greetings, I actually played the original version of the game Adventure in 1983, which this game is inspired by, so I hope you have Fun with this!");
var gameStart = rl.question("Welcome to THE COLOSSAL ADVENTURE. To begin, press enter");
var playerName = rl.question("What is your name player? ");
const player = {name: playerName, health: 96, inventory: ["Room for improvement", " a Great Smile", " Forbearance "]};

console.log("Thank you for your valuable feedback " + playerName);
console.log("You begin with a Personal Inventory containing: " + player.inventory);
console.log("You now begin this, your Hero's Journey: Conquer these enemies and become a better Human! Good Luck");

function makeMove() {
    var moveNames = ["Walk", "Run", "Print"];
    choice = rl.keyInSelect(moveNames, playerName + " do you want to Walk, Run, or check your Inventory?");
    console.log("Ok, you have chosen to " + moveNames[choice]);
    moves[choice]();
}
function dontWalk() {
    var actions = ["Run", "Defend", "Print"];
    options = rl.keyInSelect(actions, playerName + " do you want to Run, Defend, or check your Inventory?");
    console.log("Good, you have chosen to " + actions[options]);
    act[options];
}
var attack = function() {
    var takPower = Math.floor((Math.random() * 17) + 1);
    return takPower;
}
var defend = function() {
    var defPower = Math.floor((Math.random() * 16) + 1);
    return defPower;
}
var walk = function() {
    var step = Math.floor((Math.random() * 4) + 1);
    if (step > 1) {
        console.log("So far so good, what next? ");
        makeMove();
    } else {
          console.log("You see an enemy in front of you so move well");
          enemySelect();
          return step;
    }
}
var run = function() {
    var escapeOrFight = Math.floor((Math.random() * 4) + 1);
    if (escapeOrFight > 2) {
        console.log("you escaped the enemy this time");
        makeMove();
    } else {
        enemySelect();
        return escapeOrFight;
    }
}
var print = function() {
  console.log(playerName + " your inventory contains " + player.inventory);
}
var combat = function() {
    var fight = Math.floor((Math.random() * 4) + 1);
    return fight;
}

var act = [run, defend, print];
var moves = [walk, run, print];
var enemiesLive = [];
var enemySelect = function() {
    var elect = Math.floor((Math.random() * 3) + 1)
    if (elect === 1) {
        slothBattle();
    }  else if (elect === 2) {
            wrathBattle();
    }  else {
            envyBattle();
    }
}
var slothBattle = function() {
      while(Sloth.health > 1) {
          console.log("You have woken Slothfello who gives you no quarter and will send you into a sleep from which you will never awaken if you submit...")
          SlothAlive = true;
        if (Sloth.health < 1) {
            SlothAlive = false;
        }
        if (SlothAlive === false) {
              player.health = player.health + 10;
              console.log(playerName + ", you have overcome Sloth and are rewarded with 10 Health Points and have aquired improvements to your personal inventory of attributes! ");
              player.inventory.push("Diligence");
              enemiesLive.push("noSloth");
              console.log(print);
        } else if (combat() > 2)  {
              player.health = player.health - attack();
              console.log("Slothfello attacks you and you loose " + attack() + " health points, make another move");
              dontWalk();
        } else {
              Sloth.health = Sloth.health - defend();
              console.log(player.name + " your good defense resulted in Slothfello loosing " + defend() + "points, make another move");
              dontWalk();
        }
    }
}
var wrathBattle = function() {
    while(Wrath.health > 1) {
        console.log("Before you is the impatient Wrathful1 who will show you no mercy");
        WrathAlive = true;
        if (Wrath.health < 1) {
            WrathAlive = false;
        }
        if (WrathAlive === false) {
              player.health = player.health + 10;
              console.log(playerName + ", you have overcome Wrath and are rewarded with 30 Health Points and have aquired improvements to your personal inventory of attributes! ");
              player.inventory.push("Patience");
              enemiesLive.push("noWrath");
              console.log(print);
        } else if (combat() > 2) {
              player.health = player.health - attack();
              console.log("Wrathful1 attacks you and you loose " + attack() + " health points, make another move");
              dontWalk();
        } else {
              Wrath.health = Wrath.health - defend();
              console.log(player.name + " your good defense resulted in Wrathful1 loosing " + defend() + "points, make another move");
              dontWalk();
        }
    }
}
var envyBattle = function() {
    while(Envy.health > 1) {
        console.log("You now stand face to face with Dearth Envious who thirsts to deplete you of all your health");
        EnvyAlive = true;
        if (Envy.health < 1) {
            EnvyAlive = false;
        }
        if (EnvyAlive === false) {
              player.health = player.health + 10;
              console.log(playerName + ", you have overcome Envy and are rewarded with 20 Health Points and have aquired improvements to your personal inventory of attributes! ");
              player.inventory.push("Kindness");
              enemiesLive.push("noEnvy");
              console.log(print);
        } else if (combat() > 2) {
              player.health = player.health - attack();
              console.log("Dearth Envious attacks you and you loose " + attack() + " health points, make another move");
              dontWalk();
        } else {
              Envy.health = Envy.health - defend();
              console.log(player.name + " your good defense resulted in Wrathful1 loosing " + defend() + "points, make another move");
              dontWalk();
        }
    }
}
while((Sloth.health > 1) || (Wrath.health > 1) || (Envy.health > 1) && (player.health > 1)) {
      console.log("test loop");
       if (player.health === 0) {
        gameOver = true;
        console.log("Health is Wealth and you are Broke. Game Over " + playerName + " Thank You For Playing");
      } else {
        makeMove();
      }

}

console.log(playerName + " You have overcome 3 of the oldest and greatest enemies of Humankind " +
"and in doing so YOU HAVE WON THIS GAME, Good job! There are other similar enemies which have " +
"plagued those Humans who prefer to live happily in peace since day 1, so be ever vigilant " +
 "in your continuing quest to be a better person: The future of humanity is counting on you! ");
