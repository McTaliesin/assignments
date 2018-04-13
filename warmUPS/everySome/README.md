Warmup
Write two functions that mimic the .every and .some array methods.

every(arr, callback): Given an array and a callback function, return true or false based on whether each element of the array, when inserted as a parameter to the callback, returns true.

Example:  
every([1,2,"3"], (num)=>{  
  return typeof num === "number";
});
// returns false
some(arr, callback): Given an array and a callback function, return true or false based on whether at least ONE element of the array, when inserted as a parameter to the callback, returns true.

Example:  
some(["ben", "jacob", "bob"], (name)=>{  
  return name === "jacob";
});
// returns true

// solution below but it's not mine, I must do this myself from scratch!
//Array.prototype.every = function(callback){
//    for(let i = 0; i < this.length; i++){
//        if(!callback(this[i])){
//            return false;
//        }
//    }
//    return true;
//}

// function some(arr, callback){
//     for(let i = 0; i < arr.length; i++){
//         if(callback(arr[i])){
//             return true;
//         }
//     }
//     return false;
// }

//function doesEqualFive(input){
//    return input === 5;
//}

//console.log([1, 5, 3, 5, 7].every(doesEqualFive));
//console.log([1, 2, 3, 4, 7].every(doesEqualFive));
//console.log([5, 5, 5].every(doesEqualFive));
//
// console.log(some([1, 5, 3, 5, 7], doesEqualFive));
// console.log(some([1, 2, 3, 4, 7], doesEqualFive));
// console.log(some([5, 5, 5], doesEqualFive));
