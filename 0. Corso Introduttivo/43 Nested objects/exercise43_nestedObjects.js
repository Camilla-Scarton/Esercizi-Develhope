const student = {
  id: 1,
  school: "Liceo",
  year: 3,
};

// Soluzione funzionante 1
//student["personalData"] = {
//  name: "Camilla",
//  surname: "Scarton",
//  age: 26
//}

// Soluzione funzionante 2
const personalData = {
  name: "Camilla",
  surname: "Scarton",
  age: 26
}

function addNestedObject(parent, child, childName) {
  parent[childName] = child;
  //Al posto di riga 22, posso scrivere riga 24 e riga 25
  //parent[childName] = {};
  //Object.assign(parent[childName], child);
  return parent;
}

addNestedObject(student, personalData, "personalData");

// Soluzione funzionante 3
//const personalData = {
//  name: "Camilla",
//  surname: "Scarton",
//  age: 26
//}
//
//student.personalData = personalData;

// Soluzione 4 (data sul sito)
//const student = {
//  id: 1,
//  school: "Liceo",
//  year: 3,
//  personalData: {
//    name: "Camilla",
//    surname: "Scarton",
//    age: 26
//  }
//};

// Dimostrazione che la soluzione funziona
console.log(student);









