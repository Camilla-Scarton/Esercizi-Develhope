// const person1 = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 25,
// };

// const person2 = person1;

// person2.firstName = "Simon";

// console.log(person1);
// console.log(person2);

/*
Riga 11 e 12 stampano entrambe { firstName: 'Simon', lastName: 'Doe', age: 25 }.

Ciò che succede è questo:
- Da riga 1 a riga 5, si crea un oggetto con etichetta person1. 
Questo oggetto occupa uno spazio in memoria e l'etichetta che gli si assegna è person1.
(Con l'etichetta si accede a ciò che è salvato in memoria.)
- A riga 7, una nuova etichetta (person2) viene creata, 
ma gli si dice di riferirsi all'oggetto che in memoria ha già l'etichetta person1.
Quindi da riga 7, l'oggetto che già aveva l'etichetta person1, ora ha anche l'etichetta person2.
Di fatto, non è stato creato nessun nuovo oggetto: accediamo allo stesso con due etichette diverse.
- A riga 9, si ricerca la chiave firstname all'interno dell'oggetto con etichetta person2.
Una volta trovata la chiave firstName, gli si assegna il valore "Simon".
- Dato che l'etichetta person2 è appuntata all'oggetto che ha anche etichetta person1, 
riga 11 e riga 12 stampano lo stesso oggetto.
*/


const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = Object.assign({}, person1);
// L'etichetta person2 è data ad un nuovo oggetto, creato come copia dell'oggetto con etichetta person1
// I due oggetti sono uguali, ma occupano due spazi di memoria diversi a cui si accede con etichetta diversa

person2.firstName = "Simon";
// Si aggiorna solo person2, perché accediamo solo all'oggetto con etichetta person2

console.log(person1);
console.log(person2);
// Stampano effettivamente due oggetti diversi