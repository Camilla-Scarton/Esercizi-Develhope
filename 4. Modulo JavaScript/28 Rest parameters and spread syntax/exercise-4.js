// Codice da modificare usando lo spread operator
// function sum(num1, num2, num3) {
//   return num1 + num2 + num3;
// }

// const numbers = [1, 2, 3];
// console.log(sum(numbers[0], numbers[1], numbers[2])); stampa 6


// Soluzione NON modificando la funzione
function sum(num1, num2, num3) {
  return num1 + num2 + num3;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));


// Soluzione modificando la funzione... ma è poco efficiente visto che "...numbers" è resettato da "...numbs" 
// Tanto vale passare direttamente numbers alla funzione e usare numbs come array nella funzione...
// function sum(...numbs) { // <- rest parameters
//   return numbs.reduce((a,b) => a+b);
// }

// const numbers = [1, 2, 3];
// console.log(sum(...numbers)); // <- spread operator (destructuring senza assegnare nomi)