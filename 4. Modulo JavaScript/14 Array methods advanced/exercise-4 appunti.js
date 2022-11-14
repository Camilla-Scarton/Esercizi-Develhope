// L'input notes è un array di oggetti: notes = [{...}, {...}].
// Ogni oggetto dentro notes ha una chiave todo associata ad un valore che è un array di oggetti e quindi è del tipo:
// {..., todo: [{...}, {...}] } dove in ogni {...} si ha una chiave done con valore true o false.
function uncompletedNotes(notes) {
  
  // La funzione searchTodos() crea un nuovo array su cui si aggiungono i vari valori di todo
  // A partire da un input della struttura di notes
  // L'output è del tipo [ [{..., done: ...}, {..., done: ...}] , [{..., done: ...}, {..., done: ...}] ] con tutti i valori dei todo
  function searchTodos(arr) {
    let todosArr = [];
    arr.forEach((el) => todosArr.push(el.todos));
    return todosArr;
  }

  // La funzione searchDoneFalse() filtra gli elementi dell'input per tenere i todo da completare
  // Prende in input l'output della funzione precedente
  // L'output è del tipo [ [{..., done: false}, ...] , [{..., done: false}, ...] ] con solo i valori dei todo da completare
  function searchDoneFalse(arr) {
    let filteredTodosArr = [];
    arr.forEach((el) => {
      // Si filtrano gli oggetti dentro i vari array a loro volta elementi dell'array in input
      let filteredTodos = el.filter((todo) => todo.done == false); 
      // Una volta filtrati, gli elementi rimasti sono gli elementi dell'array aggiunto all'array dei todo da completare
      filteredTodosArr.push(filteredTodos);
    });
    return filteredTodosArr;
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