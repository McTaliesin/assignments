Pricing:

Goombas: 5 Coins
Bob-ombs: 7 Coins
Cheep-cheeps: 11 Coins
Baddies Caught:

The number of baddies caught will be entered into an input field

Total Price

This will be dynamicly depending on how many baddies were caught.

Project Requirements
The website must contain the following:

A list displaying each baddie by type. Each list item must:
Have baddie image
Have baddie name
Show price of that baddie
Have an input box to enter the total caught of that type
A total price at the bottom that adds sums the total cost of baddies caught
(must use Javascript for this math - no hard coded values)
A footer showing:
Mario's email address
Mario's company website url
Mario's physical address
A large title at the top of the page entitled "Mario Pest Control"
Passing Criteria: Visual Inspection by Instructor
Student demonstrated a solid understanding with the following levels of the skills tree:

Static Websites, Level 1
CSS Selectors
Colors in CSS
Fonts in CSS
Using external CSS stylesheets and JavaScript files
Deployment, Level 1
Opening an HTML document in browser

               
document.mario.addEventListener("submit",function(e){
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
               
                   