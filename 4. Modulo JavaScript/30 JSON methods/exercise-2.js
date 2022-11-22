// Solzuione con oggetti con chiavi anche non ordinate
class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  toJson() {
    return JSON.stringify(this);
  }

  static fromJson(str) {
    
    let personObj = JSON.parse(str); // Ritorno ad un oggetto dove le chiavi non sono più stringhe
    
    // Riordino delle chiavi solo se necessario
    if (Object.keys(personObj) != ["id", "firstName", "lastName", "age"]) {

      let orderedKeys = ["id", "firstName", "lastName", "age"]; // Per avere l'ordine corretto delle chiavi già impostato 

      // Creazione dell'oggetto riordinato grazie alle chiavi di orderedKeys e ai valori di personObj
      let personObjOrdered = orderedKeys
        .reduce((result, key) => {
          result[key] = personObj[key];
          return result;
        }, {}); // result è l'accumulatore, un oggetto vuoto che viene man mano popolato riferendosi agli elementi di orderedKeys

      return new Person(...Object.values(personObjOrdered)); // Tattico chiamare un return, così da saltare il successivo

    }

    return new Person(...Object.values(personObj)); // Prendo i valori di personObj e li passo alla classe come input singoli

  }
}

const json = '{"id":1,"firstName":"Mario","lastName":"Rossi","age":25}';
const developer = Person.fromJson(json);
console.log(developer);

const jsonUnordered = '{"firstName":"Mario","id":1,"age":25,"lastName":"Rossi"}';
const sameDeveloper = Person.fromJson(jsonUnordered);
console.log(sameDeveloper);



// Soluzione valida solo se il json passato in str è già con le chiavi in ordine!
// class Person {
//   constructor(id, firstName, lastName, age) {
//     this.id = id;
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }

//   toJson() {
//     return JSON.stringify(this);
//   }

//   static fromJson(str) {
//     // Ritorno ad un oggetto dove le chiavi non sono più stringhe
//     let personObj = JSON.parse(str); 
//     // Prendo i valori di personObj e li passo alla classe come input singoli
//     return new Person(...Object.values(personObj)); 
//   }
// }


// Parte di codice per il riordino delle chiavi, funzionante ma migliorabile

// Versione 1
// if (Object.keys(personObj) != ["id", "firstName", "lastName", "age"]) {
//   let orderedPerson = {};
//   orderedPerson["id"] = personObj["id"];
//   orderedPerson["firstName"] = personObj["firstName"];
//   orderedPerson["lastName"] = personObj["lastName"];
//   orderedPerson["age"] = personObj["age"];
//   personObj = orderedPerson;
// }

// Versione 2
// if (Object.keys(personObj) != ["id", "firstName", "lastName", "age"]) {
//   let orderedKeys = ["id", "firstName", "lastName", "age"];
//   let orderedPerson = {};
//   orderedKeys.forEach(el => orderedPerson[el] = personObj[el]);  
//   personObj = orderedPerson;
// }


// Codice generale per il riordino di un oggetto per ordine alfabetico delle chiavi
// function sortObj(obj) {
//   return Object.keys(obj).sort().reduce(function (result, key) {
//     result[key] = obj[key];
//     return result;
//   }, {});
// }


