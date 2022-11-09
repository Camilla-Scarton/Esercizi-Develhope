class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  
  set setterFirstName(newName) {
    if (typeof newName != "string" || newName == "") {
      this.firstName = "-";
    } else {
      this.firstName = newName;
    }
  }

  get getterFirstName() {
    return this.firstName;
  }

  set setterLastName(newName) {
    if (typeof newName != "string" || newName == "") {
      this.lastName = "-";
    } else {
      this.lastName = newName;
    }
  }

  get getterLastName() {
    return this.lastName;
  }

  set setterAge(newAge) {
    if (typeof newAge != "number" || newAge <= 0 || newAge > 130) {
      this.age = "-";
    } else {
      this.age = age;
    }
  }

  get getterAge() {
    return this.age;
  }

  get fullName() {
    return this.firstName + " " + this.lastName;
  }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);