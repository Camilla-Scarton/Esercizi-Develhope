// Soluzione sapendo quanti elementi ha l'input
// function uncompletedNotes([group1, group2]) { // Destrutturo subito l'array in entrata

//   let todosArr = []; // Array per salvare gli elementi dei todos con "done: false"

//   // Tengo solo i todos con "done: false" e li aggiungo in todosArr
//   todosArr.push(group1.todos.filter((el) => el.done == false));
//   todosArr.push(group2.todos.filter((el) => el.done == false));

//   return todosArr; // Restituisco i todos che rimangono da fare
// }

// Soluzione NON sapendo quanti elementi ha l'input 
function uncompletedNotes(notes) {
  
  let todosArr = []; // Array per salvare gli elementi dei todos con "done: false"

  // Tengo solo gli oggetti nei todos con "done: false" usando filter e poi li aggiungo in todosArr
  notes.forEach((e) => todosArr.push(e.todos.filter((el) => el.done == false)));

  return todosArr; // Restituisco l'array dei todos con false
}


const notes = [
  {
    id: 1,
    description: "Workout program",
    todos: [
      {
        id: 1,
        name: "Push ups - 10 x 3",
        done: false,
      },
      {
        id: 2,
        name: "Abdominals - 20 x 3",
        done: true,
      },
      {
        id: 3,
        name: "Tapis Roulant - 15min",
        done: true,
      },
    ],
  },
  {
    id: 2,
    description: "Front-end Roadmap",
    todos: [
      {
        id: 1,
        name: "Learn HTML",
        done: true,
      },
      {
        id: 2,
        name: "Learn CSS",
        done: true,
      },
      {
        id: 3,
        name: "Learn JavaScript",
        done: true,
      },
      {
        id: 4,
        name: "Learn Angular",
        done: false,
      },
    ],
  },
];

const notCommpletedNotes = uncompletedNotes(notes);
console.log(notCommpletedNotes);