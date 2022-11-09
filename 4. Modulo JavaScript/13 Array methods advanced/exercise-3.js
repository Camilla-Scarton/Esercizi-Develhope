// Soluzione con reduce e Math.round
function calculateAverageAge(persons) {
  // Creo un array dove salvare tutte le età
  let ageArr = [];
  persons.forEach((el) => ageArr.push(el.age));

  // Calcolo la somma delle età e poi la media approssimata 
  let sumAge = ageArr.reduce((previousValue, currentValue) => previousValue + currentValue);
  let averageAgeApprox = Math.round(sumAge / ageArr.length);

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