const person1 = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
  address: {
    state: 'Italy',
    city: 'Rome',
    street: 'Via Romano, 12'
  }
};

// Codice da cambiare perchè non funzionante
// const person2 = { ...person1 };
// person2.address.city = 'Milan';


// Soluzione funzionante
// person2 è creato come conversione della conversione: obj -> JSON -> obj
const person2 = JSON.parse(JSON.stringify(person1));
person2.address.city = 'Milan';

console.log("person1 è", person1);
console.log("person2 è", person2);


// Object.assign() NON funziona: modificare un nested object modifica anche person1!
// const person2 = Object.assign({}, person1);
// person2.address.city = 'Milan';
// console.log("person1 è", person1);
// console.log("person2 è", person2);
// Riga 28 e riga 29 stampano lo stesso oggetto: con riga 27 si è aggiornato anche person1! 