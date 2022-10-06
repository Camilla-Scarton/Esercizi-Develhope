// Soluzione giocando con var
function canPlay() {
  // sport diventa globale con un var, per definizione di var
  var sport = " Football";
  if (true) {
    // personName diventa globale per compilare correttamente
    var personName = "Cosimo";
  }
  console.log(personName + sport);
}

canPlay();

// sport diventa globale e si compila correttamente togliendo l'if
function canPlay1() {
  var sport = " Football";
  let personName = "Cosimo"; // tolto l'if, personName può avere anche un let
  console.log(personName + sport);
}

canPlay1();

// sport diventa globale e si compila correttamente togliendo l'if
function canPlay2() {
  var sport = " Football";
  var personName = "Cosimo"; // tolto l'if, personName può essere anche globale
  console.log(personName + sport);
}

canPlay2();

// sport diventa globale e si compila correttamente spostanto il console.log
function canPlay3() {
  var sport = " Football";
  if (true) {
    let personName = "Cosimo";
    console.log(personName + sport);
  }
  
}

canPlay3();