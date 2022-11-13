// Solzuione funzionante, con inner() chiamata all'esterno della funzione
// function printName() {
//     let helloName = "Hello John";
//     function inner() {
//         return helloName;
//     }
//     return inner;
// }

// console.log(printName()());

// Solzuione funzionante, con inner() chiamata dentro la funzione
function printName() {
    let helloName = "Hello John";
    function inner() {
        return helloName;
    }
    return inner();
}

console.log(printName());