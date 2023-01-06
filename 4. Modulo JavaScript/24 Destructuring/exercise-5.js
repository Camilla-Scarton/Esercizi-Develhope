const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

// NB: sempre usare la chiave preesistente come nome della variabile associata nella destrutturazione...
//     ...ammesso che non si rinonimi {id: newNameId, firstName: newNameFirstName, ...}

// Soluzione con chiavi NON rinominate al momento della creazione della variabile 
const { id, firstName, lastName, age } = person;
console.log(id, firstName, lastName, age);

// Soluzione con chiavi rinominate al momento della creazione della variabile
// const { id, firstName: name, lastName: surname, age: old } = person;
// console.log(id, name, surname, old);