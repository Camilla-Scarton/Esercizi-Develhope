// Codice da modificare
// function isAdult(person) {
//   return person.age >= 18;
// }

// L'oggetto in input è subito destrutturato, così da usare direttamente age a riga 8
function isAdult({id, firstName, lastName, age}) {
  return age >= 18;
}

const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

console.log(isAdult(person));