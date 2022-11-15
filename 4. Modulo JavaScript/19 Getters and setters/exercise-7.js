class Person {
  #firstName;
  #lastName;
  #age;

  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  
  set firstName(newName) {
    if (typeof newName != "string" || newName == "") {
      this.#firstName = "-"; // con solo 'return;', si tiene il valore di prima.
    } else {
      this.#firstName = newName;
    }
  }

  get firstName() {
    return this.#firstName;
  }

  set lastName(newName) {
    if (typeof newName != "string" || newName == "") {
      this.#lastName = "-"; // o 'return;' per tenere il valore di prima.
    } else {
      this.#lastName = newName;
    }
  }

  get lastName() {
    return this.#lastName;
  }

  set age(newAge) {
    if (typeof newAge != "number" || newAge <= 0 || newAge > 130) {
      this.#age = "-"; // o 'return;' per tenre il valore di prima.
    } else {
      this.#age = newAge;
    }  
  }

  get age() {
    return this.#age;
  }

  get fullName() {
    return `${this.#firstName} ${this.#lastName}`;
    // return this.firstName + " " + this.lastName; <- meno elegante, ma funzionante
  }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName); // stampa 'Mario Rossi'

person.firstName = 'Maria'; // Usando la funzione set specifica per la proprietà firstName
person.lastName = 'Verdi'; // Usando la funzione set specifica per la proprietà lastName
console.log(person.fullName); // stampa 'Maria Verdi'



// Test per le funzioni get/set e commenti vari:

// Per testare i getter...
console.log(person); // stampa 'Person {}' perché le variabili sono private!
console.log(person.firstName); // stampa 'Maria'
console.log(person.lastName); // stampa 'Verdi'
console.log(person.age); // stampa 25

// Per testare il setter per age...
console.log(person.age); // stampa 25
person.age = -34; // Cercando di settare come age il valore negativo -34...
console.log(person.age); //...si imposta come valore di age un trattino '-' che è quindi stampato!
person.age = 77; // Cercando di settare come age il valore 77...
console.log(person.age); //...si stampa effettivamente 77 perché 77 è un valore accettabile!
person.age = 134; // Cercando di settare come age il valore 134 che è maggiore di 130...
console.log(person.age); //...si imposta come valore di age un trattino '-' che è quindi stampato!

// Per testare i setter di firstname e lastname...
person.firstName = -34; // Cercando di settare valori non accettabili...
person.lastName = ""; // ...
console.log(person.fullName); // ...si stampa '- -'! 
person.firstName = "Camilla"; // Cercando di settare valori accettabili...
person.lastName = "Scarton"; // ...
console.log(person.fullName); // ...effettivamente c'è l'aggiornamento!

/*
Appunti:
- Per usare una funzione get, non si usano le parentesi!
  Si usa il nome dell'istanza della classe e si chiama la funzione get col suo nome soltanto.
- Anche per usare una funzione set e passare un nuovo valore, non servono le parentesi!
  Si usa il nome dell'istanza della classe, si chiama la funzione set col suo nome e si associa tramite '=' il valore da passare.
- Si usa lo stesso nome per definire la versione set e la versione get per una proprietà.
  In base alla presenza o no di un input, si capisce se usare get o set, che per keyword sono diverse.
- Quando si passano valori non accettabili, si può mantenere il valore originale mettendo "return;" al posto di "this. ... = "-";"!
- Una funzione get, senza una funzione set, si può usare per le read-only properties.
- La funzione set si attiva anche alla creazione di una nuova classe, se si usano sempre gli stessi nomi...
*/