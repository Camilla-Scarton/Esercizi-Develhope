let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numbers[0]); // Stampa del primo valore
console.log(numbers[numbers.length - 1]); // Stampa dell'ultimo valore
console.log(numbers.length); // Stampa della lunghezza dell'array
console.log(numbers[19]); // Stampa del 20esimo valore, che ha indice 19

// Quando si tenta di stampare un oggetto con un indice mancante nell'array,
// la console non dà errore ma stampa "undefined"!
// L'oggetto che richiediamo non esiste!