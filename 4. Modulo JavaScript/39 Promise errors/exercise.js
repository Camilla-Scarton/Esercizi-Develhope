// A random, isLogged è uguale a 0 o 1 
let isLogged = Math.round(Math.random());

// Controllo su isLogged da cui si ottiene un numero random o un errore di login
let randomNumberFromLogin = (isLogged) => {
    return new Promise((resolve, reject) => {
        if (isLogged) {
            resolve(Math.random());
        } else {
            reject(new Error("error from login"));
        }
    })
};

// Controllo sul numero in uscita da randomNumberFromLogin da cui si ottiene l'oggetto di John o un errore per il numero
let randomDataFromNumber = (num) => {
    return new Promise((resolve, reject) => {
        if (num>0.5) {
            resolve(`{name: "John", age: 24}`);
        } else {
            reject(new Error("error from number"));
        }
    })
};

randomNumberFromLogin(isLogged)
    .then(num => randomDataFromNumber(num))    // sostituibile con ".then(randomDataFromNumber)"
    .then(data => console.log(data))           // sostituibile con ".then(console.log)"
    .catch(err => console.log(err))            // sostituibile con ".catch(console.log)"
    .finally(() => console.log("Queste promise sono concatenate meglio! :D"));





/* Soluzione poco funzionante, ma piena di appunti sugli errori

// A random, isLogged è uguale a 0 o 1 
let isLogged = Math.round(Math.random());

// Controllo su isLogged da cui si ottiene un numero random o un errore di login
let randomNumberFromLogin = (isLogged) => 
new Promise((resolve) => {
    if (isLogged) resolve(Math.random());

    // Si gestisce l'errore con catch(), a cui si restituisce "error from login"
    //reject("error from login"); // NON ci sono errori ufficiali in console
    
    // Con o senza catch(), c'è errore in console, sia ufficiale che presente come "error from login"
    // Con catch(): è stampato "Error: error from login", con dettagli dell'errore provocato dalla riga 'reject(new Error("error from login"));' citata con numero, non riportata
    // Senza catch(): c'è errore su riga 'reject(new Error("error from login"));' riportata per intero ed è stampato "Error: error from login", con dettagli dell'errore (come con catch())
    //reject(new Error("error from login"));
    
    // In console abbiamo gli stessi messaggi dati con "reject(new Error("error from login"));", con/senza catch()
    throw new Error("error from login");
})

// Controllo sul numero in uscita da randomNumberFromLogin da cui si ottiene l'oggetto di John o un errore per il numero
let randomDataFromNumber = (num) =>
new Promise((resolve) => {
    if (num>0.5) resolve(`{name: "John", age: 24}`); 
    throw new Error("error from number");
})

// Catena delle promise
// Memo: isLogged = 1 -> randomNumberFromLogin(1) = n > 0.5 -> randomDataFromNumber(n) = `{name: "John", age: 24}`
randomNumberFromLogin(isLogged)
    .then(num => randomDataFromNumber(num)) 
    .then(data => console.log(data))
    .catch(err => console.log(err))
    .finally(console.log("Questa frase è stampata in qualsiasi caso :D e pure prima del risultato della promise D:"));
    // La frase è stampata prima perché è chiamata subito: serviva scrivere "() => console.log(...)"!
*/