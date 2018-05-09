document.addEventListener("submit", function(e) {
    e.preventDefault();

    var num = document.mario.goombasDead.value;
function enemy(name, health, punch,) {

}

var Sloth = new enemy("Slothfello", 10, 10);
var Wrath = new enemy("Wrathful1", 15, 15);
var Envy = new enemy("Dearth Envious", 20, 20);
var total = Envy.health + Wrath.health;
showMe(total)
})

function showMe(total) {
    document.getElementById("testA").innerHTML = total;
}
