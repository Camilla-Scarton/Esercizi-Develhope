function repeatHello(callback) {
    // Ogni volta che passa un 1 secondo, si chiama la funzione.
    let id = setInterval(callback, 1000);
    // Passati 4 secondi totali, il loop di setInterval è fermato.
    setTimeout(() => clearInterval(id), 4000);
    // Quindi la funzione callback() è chiamata 3 volte totali.
}

let printHello = () => console.log("Hello");

repeatHello(printHello); // Stampa 'Hello' 3 volte.