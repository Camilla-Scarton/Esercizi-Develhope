// Soluzione con solo reduce()
function calculateAverageAge(persons) {
  
  // Calcolo della somma delle età: 0 è il valore iniziale di accumulator, a cui si andranno a sommare ad una ad una tutte le età.
  let sumAge = persons.reduce((accumulator, personsEl) => accumulator + personsEl.age, 0);
  
  // Calcolo effettivo della media
  let averageAgeApprox = Math.round(sumAge / persons.length);

  return averageAgeApprox;
}

const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

const average = calculateAverageAge(persons);
console.log(persons);
console.log(average);


// Soluzione senza reduce
// function calculateAverageAge(persons) {
//   let averageAge = 0;
//   let personsNum = persons.length;
//   persons.forEach((x) => {
//     averageAge = averageAge + x.age;
//     return averageAge;
//   })
//   return Math.round(averageAge / personsNum);
// }

// Soluzione con reduce e Math.round
// function calculateAverageAge(persons) {
//   // Creo un array dove salvare tutte le età
//   let ageArr = [];
//   persons.forEach((el) => ageArr.push(el.age));

//   // Calcolo la somma delle età e poi la media approssimata 
//   let sumAge = ageArr.reduce((previousValue, currentValue) => previousValue + currentValue);
//   let averageAgeApprox = Math.round(sumAge / ageArr.length);

//   return averageAgeApprox;
// }

// Soluzione con solo reduce(), ma scritta in una riga
// function calculateAverageAge(persons) {
//   return Math.round(persons.reduce((accumulator, personsEl) => accumulator + personsEl.age, 0) / persons.length);
// }