// Da riga 2 a riga 17 si costruisce l'array dall'array dell'esercizio precedente
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

// Inizio effettivo delle'esercizio 46

for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}