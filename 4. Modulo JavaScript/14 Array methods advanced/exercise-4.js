function uncompletedNotes(notes) {
  // L'input notes è un array di oggetti: notes = [{...}, {...}].
  // Ogni oggetto dentro notes ha una chiave todo associata ad un valore che è un array di oggetti e quindi è del tipo:
  // {..., todo: [{...}, {...}] } dove in ogni {...} si ha una chiave done con valore true o false.

  // La funzione searchTodo() crea un nuovo array su cui si aggiungono i vari valori di todo
  function searchTodos(arr) {
    let todosArr = [];
    arr.forEach((el) => todosArr.push(el.todos));
    return todosArr;
    // L'output è del tipo [ [{...}, {...}] , [{...}, {...}] con tutti i valori dei todo
  }

  // La funzione searchDoneFalse prende in input l'output della funzione precedente e lo filtra per tenere i todo da completare
  function searchDoneFalse(arr) {
    let filteredTodosArr = []; // Array in cui salvare i todo da completare
    arr.forEach((el) => {
      // Sono filtrati gli oggetti dentro i vari array che sono elementi dell'array in input
      let filteredTodos = el.filter((todo) => todo.done == false); 
      // Una volta filtrati, gli elementi rimasti sono gli elementi dell'array aggiunto all'array dei todo da completare
      filteredTodosArr.push(filteredTodos);
    });
    return filteredTodosArr;
    // L'output è del tipo [ [{...}, {...}] , [{...}, {...}] con solo i valori dei todo da completare
  }

  let todosArr = searchTodos(notes); // Dall'input estraggo i todo
  let todosDoneFalseArr = searchDoneFalse(todosArr); // Dai todo estraggo i todo da completare 

  return todosDoneFalseArr;
  // L'output è del tipo [ [{...}, {...}], [{...}, {...}] ] dove ogni elemento dell'array è il valore del todo con solo i non completati  

  /* Output alternativo:
  // Creo una copia dell'array in input per poi andare ad aggiornarla
  let uncompleted = notes.map((x) => x);
  
  // Aggiorno l'input di partenza, aggiornando i valori dei todo lasciando solo i todo da completare
  for (let i = 0; i < uncompleted.length; i++) {
    uncompleted[i].todos = todosDoneFalseArr[i];
    console.log(uncompleted[i].todos);
  }
  return uncompleted; //L'output ha la stessa struttura dell'input */
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