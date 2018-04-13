//Understand the problem.
//Make a plan.
//Carry out the plan.
//Looking back. Can we check and prove the the result is correct?
//
//1.things I hadn't yet thought of:
//search and destroy all non letter characters
//2.a-za-z to make it easy to start the new 'encrypted' alphabet
//3. make var name for readline = ask, then use ask for readability/simplicity
//4.use console.log often to test code before it gets huge
//5.parseInt
//6.
//
//

var readline = require('readline-sync');
var input = readline.question('Would you like to Encrypt or Decrypt? ')

//make buttons for user to choose encrypt or decrypt

// if user selects encrypt then
var encryptInput = readline.question('What phrase would you like to encrypt? ').toLowerCase();
// if user selects decrypt then
var decryptInput = readline.question('What phrase would you like to decrypt? ').toLowerCase();
//
//this code will have to be in 2 sections, an encrypt section and a decrypt section.
//the encrypt section will satisfy the project requirements and the decrypt section will satisfy me.
//
//if button E(encrypt) is pressed then call function enCrypt 
//
//function enCrypt will have passed to it the number user entered 
//
//string to be decrypted using the entered number as the index number starting point 
//
//if button D(ecrypt) is pressed then call function deCrypt passing to it the number 
//
//entered for letters to shift 
//

//
var shift = parseInt(readline.question('How many letters would you like to shift? '));
//
//
//
//if user selects decrypt
//create an array of the 1000 most common words in english
//then create 26 arrays
//one each for the the 26 possible shifted arrays for the english alphabet
//compare each of the 26 arrays to the list of 1000 most common english words
//sort the 26 arrays 
//list (and/or return) the 3 arrays which have the highest frequency of english words
//print to window (innerText or innerHTML?) the 3 arrays in order of highest to lowest freq
//
//

//
//convert letter characters in the 