// Codice da modificare
// function isAdult(person) {
//   return person.age >= 18;
// }

// L'oggetto in input è subito destrutturato, così da usare direttamente age a riga 8
function isAdult({age}) {
  return age >= 18;
}

const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

console.log(isAdult(person));

// NB: Quando si destruttura un oggetto, posso prendere anche direttamente una sola chiave!
//     Da person di riga 11 con 4 chiavi, a riga 7 prendo solo age!