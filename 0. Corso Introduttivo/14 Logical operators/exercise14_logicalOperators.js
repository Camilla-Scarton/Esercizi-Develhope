const question1 = 101 < 67; // false
const question2 = 1 == true; // true
const question3 = true != 1 // false
const question4 = 4 <= 4 // true

console.log(question1 || question2) //il risultato deve essere true
console.log(question1 && question2) //il risultato deve essere false
console.log(question3 || question2) //il risultato deve essere true
console.log(question4 && !question4) //il risultato deve essere false (invece di usare !==)
console.log(question2 && !question4) //il risultato deve essere false (invece di usare !==)