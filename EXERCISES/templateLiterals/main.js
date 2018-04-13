// //effectively turn function (arguments) { expression } into arguments => expression.
// const person = {
//   name: "Janice",
//   location: "Hawaii",
//   fletr =>
// console.log(`Hi ${this.name}! \nWelcome to ${this.location}.\nI hope you enjoy your say. Please ask the president of ${this.location} if you need anything.`);
//
//
//
// }
//
// person.fletr();

// Hi Janice!
//
// Welcome to Hawaii.
//
// I hope you enjoy your say. Please ask the president of Hawaii if you need anything.
// If you didn't do that with Template Literals, do it now with Template Literals.



function Person(name,age) {

  this.name = name;
  this.age = age;
}

var harry = new Person("Harry, 19");
harry.speak();
class Person {
  constructor(name,age) {
    this.name = name;
    this.age = age;

  }
  speak() {
    console.log(`my name is ${this.name}`);
  }
}

//const add = (a,b) => {



class Monk extends Person {
  constructor(pray, robe, yoga){
    super(pray, robe)
    this.yoga = yoga;
  }

}
