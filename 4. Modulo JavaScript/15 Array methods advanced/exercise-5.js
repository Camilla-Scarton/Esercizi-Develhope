// Soluzione/funzione solo con sort() 
function sortPeopleByAge(people) {
  people.sort((a, b) => a.age - b.age);
  return people; 
  // NB: sort() NON crea un secondo array ordinato, ma modifica direttamente l'orginale!
}

const people = [
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

const sortingByAge = sortPeopleByAge(people);
console.log(sortingByAge);



// Soluzione funzionante, ma migliorabile

// // La funzione prende in input un array di oggetti del tipo {name: ..., age: ...}
// function sortPeopleByAge(arr) {

//   // Creo un array dove salvare solo le età presenti nell'input, per poi riordinarle in modo crescente
//   let ageArr = [];
//   arr.forEach((el) => ageArr.push(el.age));
//   ageArr.sort((a,b) => (a-b));

//   // Creo un array dove aggiungere gli oggetti delle persone se c'è corrispondenza fra l'età in ageArr e l'età negli oggetti dell'input 
//   let orderedPeople = [];
//   for (let i = 0; i < ageArr.length; i++) {
//     for (let k = 0; k < arr.length; k++) {
//       if (arr[k].age == ageArr[i]) {
//         orderedPeople.push(arr[k]); // per creare l'array degli oggetti del tipo {name: ..., age: ...}
//         //orderedPeople.push(arr[k].name); // per creare l'array dei soli nomi e avere un output del tipo ['Carl', 'Mark', ...]
//       }
//     }
//   };

//   return orderedPeople;
// }
