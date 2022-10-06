function sayHelloName(callback) {
    console.log("Hello");
    callback();
}

function printName() {
    console.log("Camilla");
}

sayHelloName(printName); 
// NB: la callback è richiamata solo con nome
//     NON con "printName()"


/*
Dato che in printName c'è un console.log l'output è un'azione, non un valore. 
Se provo a concatenare "Hello " e la funzione di callback, sto concatenando una stringa e un'azione.
Forzando printname() a non dare valore in output, non posso scrivere tutto sulla stessa riga.
*/
