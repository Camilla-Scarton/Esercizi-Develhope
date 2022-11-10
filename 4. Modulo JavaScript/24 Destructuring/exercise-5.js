const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

// NB: sempre usare la chiave preesistente come nome della variabile associata nella destrutturazione
const { id, firstName, lastName, age } = person;
console.log(id, firstName, lastName, age);