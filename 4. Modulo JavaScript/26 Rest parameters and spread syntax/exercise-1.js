// Codice da modificare
// function sum(num1, num2, num3, num4, num5) {
//     return num1 + num2 + num3 + num4 + num5;
// }

function sum(...numbs) { // così si crea un array: numbs = [1, 2, 3, 4, 5] 
    return numbs.reduce((a,b) => a+b); // e si sfruttano i metodi degli array
}

console.log(sum(1, 2, 3, 4, 5)); // deve stampare 15