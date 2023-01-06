const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

// Codice da modificare
// const id = person.id;
// const personInfo = {
//   firstName: person.firstName,
//   lastName: person.lastName,
//   age: person.age
// };

const {id, ...personInfo} = person;

console.log(id, personInfo); // deve stampare: 1 { firstName: 'Mario', lastName: 'Rossi', age: 25 }