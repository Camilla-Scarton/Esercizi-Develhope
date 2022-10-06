let students = [];

function Student(id, name, surname, age) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.age = age;
}

let student1 = new Student(1, "Maria", "Rossi", 27);
let student2 = new Student(2, "John", "Smith", 35);
let student3 = new Student(3, "Vincent", "Cassel", 48);

students[0] = student1;
students[1] = student2;
students[2] = student3;

console.log(students); // Check per vedere che funzioni tutto

console.log(students[0]); // Effettiva richiesta dell'esercizio