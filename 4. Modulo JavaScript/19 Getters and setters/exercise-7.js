class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  
  set funcFirstName(newName) {
    if (typeof newName != "string" || newName == "") this.firstName = "-"; // Con solo 'return;', si tiene il valore di prima.
    this.firstName = newName;
  }

  get funcFirstName() {
    return this.firstName;
  }

  set funcLastName(newName) {
    if (typeof newName != "string" || newName == "") this.lastName = "-"; // o 'return;' per tenere il valore di prima.
    this.lastName = newName;
  }

  get funcLastName() {
    return this.lastName;
  }

  set funcAge(newAge) {
    if (typeof newAge != "number" || newAge <= 0 || newAge > 130) this.age = "-"; // o 'return;' per tenre il valore di prima.
    this.age = newAge;
  }

  get funcAge() {
    return this.age;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
    // return this.firstName + " " + this.lastName; <- meno elegante, ma funzionante
  }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName); // stampa 'Mario Rossi'

person.funcFirstName = 'Maria'; // Usando la funzione set specifica per la proprietà firstName
person.funcLastName = 'Verdi'; // Usando la funzione set specifica per la proprietà lastName
console.log(person.fullName); // stampa 'Maria Verdi'



/* Test per le funzioni get/set e commenti vari:


// NB: person.firstName = 'Maria' e person.lastName = 'Verdi' creano confusione se scritti a riga 53 e 54 rispettivamente.
//     Infatti, a riga 55 si stampava lo stesso 'Maria Verdi', ma per aggiornamento dei valori
//     della chiave 'firstName' e della chiave 'lastName' nell'oggetto 'person'!
//     Si può pensare di definire "set firstName() {...}", così da aggiungere un controllo al normale aggiornamento
//     dei valori per le chiavi... ma scrivendo anche "get firstName() {...}" si vincola la sola lettura dei valori
//     a ciò che è definito nella funzione get. Se tipo si ha "get firstName() {return "Banana";}", 
//     non si ha più accesso al normale person.firstName come valore associato alla chiave 'firstName' nell'oggetto 'person'.


// Per testare i getter...
console.log(person); // stampa 'Person { firstName: 'Maria', lastName: 'Verdi', age: 25 }'
console.log(person.funcFirstName); // stampa 'Maria'
console.log(person.funcLastName); // stampa 'Verdi'
console.log(person.funcAge); // stampa 25


// Per testare il setter per age...
console.log(person.funcAge); // stampa 25
person.funcAge = -34; // Cercando di settare come age il valore negativo -34...
console.log(person.funcAge); //...si imposta come valore di age un trattino '-' che è quindi stampato!
person.funcAge = 77; // Cercando di settare come age il valore 77...
console.log(person.funcAge); //...si stampa effettivamente 77 perché 77 è un valore accettabile!
person.funcAge = 134; // Cercando di settare come age il valore 134 che è maggiore di 130...
console.log(person.funcAge); //...si imposta come valore di age un trattino '-' che è quindi stampato!


// Per testare i setter di firstname e lastname...
person.funcFirstName = -34; // Cercando di settare valori non accettabili...
person.funcLastName = ""; // ...
console.log(person.fullName); // ...si stampa '- -'! 
person.funcFirstName = "Camilla"; // Cercando di settare valori accettabili...
person.funcLastName = "Scarton"; // ...
console.log(person.fullName); // ...effettivamente c'è l'aggiornamento!


Appunti:
- Per usare una funzione get, non si usano le parentesi!
  Si usa il nome dell'istanza della classe e si chiama la funzione get col suo nome soltanto.
- Anche per usare una funzione set e passare un nuovo valore, non servono le parentesi!
  Si usa il nome dell'istanza della classe, si chiama la funzione set col suo nome e si associa tramite '=' il valore da passare.
- Le funzioni set e get viaggiano in coppia, quindi si usa lo stesso nome per definire la versione set e la versione get.
  In base alla presenza o no di un input, si capisce se usare get o set, che per keyword sono diverse.
- Quando si passano valori non accettabili, si può mantenere il valore originale mettendo "return;" al posto di "this. ... = "-";"!
- Una funzione get, senza una funzione set, si usa per le read-only properties.
*/