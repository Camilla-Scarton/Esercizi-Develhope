const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};


// Soluzione con replacer fatto ad array
const json = JSON.stringify(person, ['id', 'age']);
// Con specifica delle chiavi da salvare, si crea json = '{"id":1,"age":25}'


// // Soluzione con replacer fatto a funzione
// const json = JSON.stringify(person, function (key, value) {
//   if (typeof value === "string") {
//     return undefined;
//   } else {
//     return value;
//   }
// });
// // In questo modo, json è creato sempre come '{"id":1,"age":25}'


console.log(json); // returns: {"id":1,"age":25} the string
console.log(JSON.parse(json)); // returns: { id: 1, age: 25 } the object