var Wizard = function(type, first, last, age, town, dog) {
    this.type = type;
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = town;
    this.dogBreed = dog;
    this.speak = function() {
       console.log("Abrahadabra");
    }

Wizard.prototype.speak = function() {
  console.log("saidso");
}
Wizard.prototype.lightningBolt = function() {
  console.log("bolt");
}
var wizards = [];
for (var i = 0; i < 5; i++;)
   wizards.push(new Wizard("Harry Bother", "bad", ""));
}
var merlin = new Wizard("good","Merlin", "D'Arthur", "999", "Oxford", "Cerebus");
var dmort = new Wizard("bad","Voldemort", "Shmoe", "499" ,"Toledo", "Sirius");
var sauron = new Wizard("ugly","Sauron", "Poopypants", "678", "MSNBC", "Fluffy");
var getafix = new Wizard("good","Getafix", "ofGaul", "4999", "Biarritz", "Caesar");
var hogwart = new Wizard("ugly","Hogwart", "Potter", "23", "Harvard", "RomWeasely");
