// Codice da aggiornare per evitare di usare la variabile temp
// let num1 = 10;
// let num2 = 20;
// console.log('Before swap: ', num1, num2); // Before swap: 10 20

// // Variable swapping
// let temp = num2;
// num2 = num1;
// num1 = temp;

// console.log('After swap: ', num1, num2); // After swap: 20 10


let num1 = 10;
let num2 = 20;
console.log('Before swap: ', num1, num2); // Before swap: 10 20

// Variable swapping with destructuring
[num2, num1] = [num1, num2];

console.log('After swap: ', num1, num2); // After swap: 20 10


// Variable swapping simile a riga 19, ma meno efficiente
//
// let numArr = [num1, num2];
// let [newNum2, newNum1] = numArr; <- let [num2, num1] = numArr dà errore
// num1 = newNum1;
// num2 = newNum2;
//
// Variable swapping di riga 19, scritto su due righe
//
// let numArr = [num1, num2];
// [num2, num1] = numArr; <- Togliendo il let di riga 27, posso usare i nomi esistenti