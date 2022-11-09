class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const developer = new Developer("Mario", "Rossi", "Front-end");
console.log(
  developer.firstName + " " + developer.lastName + " " + developer.role
);
