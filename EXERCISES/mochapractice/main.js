const firstLastOver17 = (arr) => {
  return arr
    .filter(person => person.age > 17)
    .map(person => `${person.firstName} ${person.lastName}`),
}
module.exports = { firstLastOver17,
    sum
  };
