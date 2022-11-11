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
    // Ritorno ad un oggetto dove le chiavi non sono più stringhe
    let personObj = JSON.parse(str); 
    // Prendo le chiavi di personObj e le passo alla classe come input singoli
    return new Person(...Object.keys(personObj)); 
  }
}

const json = '{"id":1,"firstName":"Mario","lastName":"Rossi","age":25}';
const developer = Person.fromJson(json);
console.log(developer);