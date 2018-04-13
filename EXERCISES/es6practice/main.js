var name = 'John'
var age = 101
let pets = ["cat", "dog"]

const petObjects = []

for (let i = 0; i < pets.length; i++){
  const pet = {type: pets[i]}
  if (pets[i] === "cat"){
    let name = "fluffy"
  } else {
    let name = "spot"
  }
  pet.name = name
  petObjects.push(pet)
}
