errors noticed;
it'd be nice to have 'method #1' and
'method #2' labeled respectively.

function factorial(n) {  
  if (n === 0) return 1;
    return n * factorial(n - 1);
  }             //this closing curly brace is not nessa
}
console.log(factorial(6));  
// 6*5*4*3*2*1 -> 720

Exercise - Functions
14 MAY 2015 on Exercise, JavaScript, Programming Principles, Level 2
Functions are important building blocks in any language. They help ensure that your code follows the DRY principle and that you follow a design principle called Separation of Concerns. Your functions should “do one thing and do it well” (McIlroy). These exercises will help strengthen your function know-how.

Write a function that accepts two numbers as parameters, and returns the sum.

Write a function that accepts three numbers as parameters, and returns the largest of those numbers.

Write a function that accepts one number as a parameter, and returns whether that number is even or odd. (Return the string "even" or "odd");

Write a function that accepts a string as a parameter. If the length of the string is less than or equal to twenty characters long, return the string concatenated with itself (string + string). If the string is more than twenty characters long, return the first half of the string.

Optional Challenge
Write a function that accepts a number ‘n’ as a parameter. Then print the first ‘n’ Fibonacci numbers and return their sum.

Write a function to solve the quadratic equation. (It should accept three numbers as parameters, and then return an array with the resulting x values.)

Write a function that accepts a string as a parameter. Return the most frequently occuring letter in that string.
