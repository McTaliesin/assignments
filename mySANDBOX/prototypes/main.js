var cat = {
    sound: "meow"
}

var animal = {
  sound: "generic soundsss",
  numlegs: 4,
  speak: function() {
      console.log(this.sound);
  }
}
Object.setPrototypeOf(cat, animal);

cat.speak();
