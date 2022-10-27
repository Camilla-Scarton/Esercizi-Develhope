/* L'errore dato in console è che personName nel console.log non è definito
   L'if crea uno scope isolato.
   Anche se sia l'if che il console.log sono all'interno dello stesso scope, con l'if se ne crea un altro

function canPlay() {
  let sport = " Football";

  if (true) {
    let personName = "Cosimo";
  }

  console.log(personName + sport);
}

canPlay();
*/

// Soluzione inserendo tutti nello scope della funzione
function canPlay1() {
  let sport = " Football";
  let personName = "Cosimo";
  console.log(personName + sport);
}

canPlay1();

// Soluzione usando var che rende personName più globale
function canPlay2() {
  let sport = " Football";
  if (true) {
    var personName = "Cosimo";
  }
  console.log(personName + sport);
}

canPlay2();

// Soluzione spostando il console.log
function canPlay3() {
  let sport = " Football";
  if (true) {
    let personName = "Cosimo";
    console.log(personName + sport);
  }
}

canPlay3();