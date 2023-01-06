// Soluzione dell'esercizio
function printName() {
    let helloName = "Hello John";
    function inner() {
        setTimeout(() => console.log(helloName), 1000);
    }
    return inner;
}

printName()();


// Appunti per me
// Soluzione (NON funzionante) con console.log() fuori da printName
// function printName() {
//     let helloName = "Hello John";
//     function inner() {
//         setTimeout(() => console.log(helloName), 1000);
//     }
//     return inner;
// }
//
// console.log(printName()()); // Stampa subito undefined (e "Hello John" come side effect, dopo 1 sec)
// printName()(): printName() ritorna inner -> inner() NON ritorna niente. 
//                Perciò è stampato undefined.
// printName()() extra: con printName() helloName è "Hello John" -> con inner() si fa partire setTimeout. 
//                      Perciò è stampato "Hello John" dopo 1 secondo come side effect.

// console.log(typeof(printName()())); // Stampa subito undefined (e "Hello John" come side effect, dopo 1 sec)
// typeof(printName()()) = typeof(inner()) = typeof(Ciò che inner() ritorna, quindi niente) = undefined
// inner() non ritorna niente... ma fa partire setTimeout!

// console.log(typeof(setTimeout(() => {}, 1000))); // Stampa object (e basta perchè la funzione dentro setTimeout è vuota)
// setTimeout() crea un oggetto!

/* setTimeout(() => console.log(helloName), 1000) crea:
Timeout {
  _idleTimeout: 1000, <- RITARDO DATO
  _idlePrev: [TimersList],
  _idleNext: [Timeout],
  _idleStart: 68,
  _onTimeout: [Function (anonymous)], <- FUNZIONE DATA () => console.log(helloName)
  _timerArgs: undefined,
  _repeat: null,
  _destroyed: false,
  [Symbol(refed)]: true,
  [Symbol(kHasPrimitive)]: false,
  [Symbol(asyncId)]: 6,
  [Symbol(triggerId)]: 1
}
*/ 
