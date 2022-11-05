const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

const personKeys = Object.keys(person);
const personValues = Object.values(person);

for (let i = 0; i < personKeys.length; i++) {
  console.log(personKeys[i] + ": " + personValues[i]);
}