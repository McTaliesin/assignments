var enemies = ["Lex", "Batman", "Darkseid", "Brainiac", "General Zod", "Doomsday"];
var isThereKryptonite = true;

function whoWins(isThereKryptonite , enemies) {
    for (var i = 0 ; i <= 5 ; i++) {
        if (i % 2 === 0) {
            isThereKryptonite = true;
        } else {
            isThereKryptonite = false;
        if (i !== isThereKryptonite) {
            return "Superman beats " + enemies + ", of course";
        } else {
            return "Depends on how quick Superman can get rid of the Kryptonite. " +
            enemies + " could possibly win this one.";

        }
        }
    }
 }
console.log( whoWins ( isThereKryptonite , enemies [i] ) );


function HowAttractedIsLoisLaneToMe() {
    var clarkKent = true;
    var superman  = false;
    return Math.floor( ( Math.random() * 10 ) + 1 ) ;

    while (clarkKent = true) {
        console.log("I'm just a nerdy columnist");
        var phoneBoothQuickChange = Math.random();
        if (phoneBoothQuickChange >= 0.5) {
            clarkKent = false;
            superman  = true;
            console.log("Now I'm Superman!");
        }
    }
}
console.log( HowAttractedIsLoisLaneToMe() ) ;
