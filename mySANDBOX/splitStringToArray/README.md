http://jsplain.com/javascript/index.php/Thread/44-Splitting-a-string-based-on-spaces-commas-and-dots/



Splitting a string based on spaces, commas and dots
Sep 18th 2014

How would we split the following string value by separating the words and converting them into an array?
Source Code
var text = "Bla bla Tony, bla la Tony, bla bla Tony bla bla bla Tony.";


The string split() method comes to mind. We can separate the string based on its white space:

Source Code
 var textArray1 = text.split(" "); 


That will give us:

["Bla", "bla", "Tony,", "bla", "la", "Tony,", "bla", "bla", "Tony", "bla", "bla", "bla", "Tony."]

Notice how the word Tony is not consistent, some include commas and others include dots.

We need to ask regex (regular expressions) to help us a bit. Here's how:

Source Code
var textArray2 = text.split(/[ ,.]+/); 


Now the array result is:

["Bla", "bla", "Tony", "bla", "la", "Tony", "bla", "bla", "Tony", "bla", "bla", "bla", "Tony", ""]

A Regular Expression is the term used to describe a codified method of searching invented by the mathematician Stephen Kleene.

We include the expression within the / / forward slashes. In this example we have a white space, a comma and a point. The brackets are part of the split method like it shows on my first source code demonstration. The + sign states to also look for sequentially repeated spaces, commas or points.

Here's an example of using this method of splitting in order to search for the word Tony in a string:

JS/TS Code
var text = "Bla bla Tony, bla la Tony, bla bla Tony bla bla bla Tony."; 
var arr = text.split(/[ ,.]+/);
var myName = "Tony";
var hits = [];
for (var i = 0; i < arr.length; i++) {
  if (arr[i] === myName || arr[i] === myName + "." || arr[i] === myName + "!") {
    hits.push(arr[i]);
  }
}
console.log(hits);
/* Result:
["Tony", "Tony", "Tony", "Tony"] 
*/



Please register with JSPlain.com to get notified of future articles
or join me at Twitter. (link on the bottom)
