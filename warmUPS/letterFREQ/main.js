//var alphabet = "abcdefghijklmnopqrstuvwxyz";
//var myarray = alphabet.split(',');
//var answer = []
//for (var i = 0; i < myarray.length; i++) {

//console.log(myarray[i]);}


//make var = to alphabet string,
//make var = to phrase to be processed
// make a for loop to go through each element of phrase
//  for each element in phrase, append +1 or var+= to
// var phrase = (decca);
// var answer = [a,1,b,c,2,d,1,e,1,f,0,g,0]


//below is NOT my solution, its Liz's
function letterFreq(str) {
  var freq = {};
  for (var i = 0; i < str.length; i++) {
    var charscter = str.charAt(i);
    if(freq[character]) {
       freq[character]++;
    } else {
      freq[character] = 1;
    }


  }
    return freq
}
