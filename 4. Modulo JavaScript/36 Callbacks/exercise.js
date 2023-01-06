function repeatHello(callback) {
    let id = setInterval(callback, 1000);
    // Passati 5 secondi totali, il loop di setInterval è fermato.
    setTimeout(() => clearInterval(id), 5000);
}

let printHello = () => console.log("Hello");

repeatHello(printHello); // Stampa 'Hello' 4 volte.
