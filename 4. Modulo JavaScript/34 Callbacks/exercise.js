function printAsyncName(callback, name) {
    setTimeout(callback, 1000); // <- Callback e basta
    setTimeout(() => console.log(name), 2000);
} 

// function printAsyncName(callback, name) {
//     setTimeout(() => callback(), 1000); // <- Callback con arrow function
//     setTimeout(() => console.log(name), 2000);
// } 

// function printAsyncName(callback, name) {
//     setTimeout(function() { callback() }, 1000); // <- Callback senza arrow function
//     setTimeout(() => console.log(name), 2000);
// } 

// Funzione da richiamare scritta come funzione normale
function printHello() {
    console.log("Hello");
}

// Funzione da richiamare scritta come arrow function
// let printHello = () => console.log("Hello");

printAsyncName(printHello, "Camilla");



// Soluzione alternativa funzionante, ma callback("Hello") è bruttino

// Soluzione con arrow function
// function printAsyncName(callback, name) {
//     setTimeout(() => callback("Hello"), 1000); // <- La callback è chiamata con arrow function
//     setTimeout(() => console.log(name), 2000);
// } 

// Soluzione senza arrow function
// function printAsyncName(callback, name) {
//     setTimeout(function () { callback("Hello") }, 1000); // <- La callback è chiamata senza arrow function
//     setTimeout(function () { console.log(name) }, 2000);
// } 

///printAsyncName(console.log, "Camilla");

// La funzione setTimeout prende in input due parametri: il pezzo di codice da eseguire e il ritardo con cui farlo.
// Il pezzo di codice in input può essere scritto tramite un arrow function, un anonymous function o una referenza.
