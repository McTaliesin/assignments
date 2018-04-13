//Next make an array of your favorite super heros. Then iterate over them and 
//create an <li> item for each. Then append each item to a <ul>.

var hero = ["bat", "cat", "rat"];
 document.getElementById("button").addEventListener("click"), function() {
// the document gotbyid "button" 's eventListener knownAs click has the/a function that:

for (var i = 0; i < hero.length; i++) {
// for each element in the hero array it will start at the begining and itterate through the full length of the array incrementing one to the next (i++)
    document.getElementById("list").innerHTML += ("<li>" + hero[i] + "</li>")
// the document Id'd by its id "list" will have
   }
 }
 


