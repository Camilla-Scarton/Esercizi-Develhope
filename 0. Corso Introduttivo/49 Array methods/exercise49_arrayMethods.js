const students = [
  { id: 1, name: "Luca", surname: "Rossi", age: 20 },
  { id: 2, name: "Mario", surname: "Bianchi", age: 24 },
  { id: 3, name: "Giovanni", surname: "Brambilla", age: 30 }
];

students.pop(); // Elimino Giovanni
console.log(students);

students.push({ id: 3, name: "Francesco", surname: "Verdi", age: 41 }); // Aggiungo Francesco
console.log(students);

// NB: pop e push stanno usando oggetti perché students è un array di oggetti