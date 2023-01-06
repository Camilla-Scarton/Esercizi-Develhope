const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

// Soluzione con Object.keys/values
// const personKeys = Object.keys(person);
// const personValues = Object.values(person);

// for (let i = 0; i < personKeys.length; i++) {
//   console.log(personKeys[i] + ": " + personValues[i]);
// }

// Soluzione con Object.entries
const personEntries = Object.entries(person);

for (let i = 0; i < personEntries.length; i++) {
  console.log(personEntries[i][0] + ": " + personEntries[i][1]);
}