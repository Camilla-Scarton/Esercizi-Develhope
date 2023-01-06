// A random, isLogged è uguale a 0 o 1, quindi è interpretabile come false o true 
const isLogged = Math.round(Math.random()); // essendo mutabile, permette di coprire tutti i casi

// Controllo su isLogged da cui si ottiene un numero random o un errore di login
let randomNumberFromLogin = (isLogged) => 
new Promise((resolve, reject) => {
    if (isLogged) resolve(Math.random());
    reject("error from login");
})

// Controllo sul numero in uscita da randomNumberFromLogin da cui si ottiene l'oggetto di John o un errore per il numero
let randomDataFromNumber = (num) =>
new Promise((resolve, reject) => {
    if (num>0.5) resolve(`{name: "John", age: 24}`);
    reject("error from number");
})

// Catena delle promise
randomNumberFromLogin(isLogged) // da qui si ha un numero o un errore
    .then(num => randomDataFromNumber(num)) // da qui si ha l'oggetto di John o un errore
    .then(data => console.log(data)) // da qui si stampa l'oggetto di John
    .catch(err => console.log(err)); // qualsiasi errore porta a questo punto e qui viene stampato