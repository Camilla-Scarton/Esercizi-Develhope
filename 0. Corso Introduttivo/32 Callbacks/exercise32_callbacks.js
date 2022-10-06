// Copio e aggiungo setTimeout() alla funzione dell'esercizio precedente
function sayHelloName(callback) {
    // La funzione setTimeout si aspetta un richiamo ad una funzione
    setTimeout( () => {
        console.log("Hello");
        callback();
    },1000);
    //Ma andava bene anche...
    setTimeout( function() {
        console.log("Hello");
        callback();
    },1000);
}

function printName() {
    console.log("Camilla");
}

sayHelloName(printName);