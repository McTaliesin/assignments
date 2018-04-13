document.addEventListener("submit", function(e) {
    e.preventDefault();
    var aDead = document.mario.goombasDead.value;
    var bDead = document.mario.bobomsDead.value;
    var cDead = document.mario.cheapsDead.value;
    var a = (aDead * 5);
    var b = (bDead * 7);
    var c = (cDead * 11);
    var zum = a + b + c;
    showMe(zum);
})
function showMe(zum) {
    document.getElementById("total").innerHTML = zum;
}
