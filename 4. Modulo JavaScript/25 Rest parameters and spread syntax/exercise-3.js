let numberStore = [0, 1, 2];
let newNumber = 3;

// numberStore.push(newNumber); diventa...
numberStore = [...numberStore, newNumber];

console.log(numberStore); // deve stampare [0, 1, 2, 3]