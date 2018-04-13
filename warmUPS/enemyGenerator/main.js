document.monsterGenerator.addEventListener("submit", function (mg) {
    mg.preventDefault();
    var monsterType = document.monsterGenerator.monsterFamType.value;
    var hitPoints = document.monsterGenerator.hitPoints.value;
    var defense = document.monsterGenerator.defense.value;
    var generateMonsterType = [];
    for (var i =0 ; i < monsterArray.length; i++) {
        if (monsterArray[i] < 100) {
            generateMonsterType.push(monsterArray[i].value);
            
        }
    }
})


/* code below borrowed from Sams exhibit
function EnemyGenerator(type, hp, defense) {
        this.type = type || "Mighty Grunt";
        this.hp = hp || 49; 
        this.defense = defense || 147;
}
var enemieType = ["Ancient Dragon", "Prowler", "Mighty Grunts"]
var r = Math.floor(Math.random() *101)
if(r < 50){
    var newEnemy = new EnemyGenerator ("Mighty Grunt")
    newEnemy.hp = Math.floor(Math.random() * 30) + 20)
    newEnemy.defense = newEnemy.hp * 3
    
} else if ( r > 50 && r <= 90){
    var newEnemy = new EnemyGenerator ("Prowler")
    newEnemy.hp = Math.floor(Math.random() * 30) + 20)
    newEnemy.defense = newEnemy.hp * 3
} else {
    var newEnemy = new EnemyGenerator ("Ancient Dragon")
    newEnemy.hp = Math.floor(Math.random() * 30) + 20)
    newEnemy.defense = newEnemy.hp * 3
}

*/

function EnemyGenerator(type, hp, defense) {
        this.type = type || "Mighty Grunt";
        this.hp = hp || 49; 
        this.defense = defense || 147;
}


var enemieType = ["Ancient Dragon", "Prowler", "Mighty Grunts"]
var r = Math.floor(Math.random() *101)
if(r < 50){
    var newEnemy = new EnemyGenerator ("Mighty Grunt")
    newEnemy.hp = Math.floor(Math.random() * 30) + 20)
    newEnemy.defense = newEnemy.hp * 3
    
} else if ( r > 50 && r <= 90){
    var newEnemy = new EnemyGenerator ("Prowler")
    newEnemy.hp = Math.floor(Math.random() * 30) + 20)
    newEnemy.defense = newEnemy.hp * 3
} else {
    var newEnemy = new EnemyGenerator ("Ancient Dragon")
    newEnemy.hp = Math.floor(Math.random() * 30) + 20)
    newEnemy.defense = newEnemy.hp * 3
}














