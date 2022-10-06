/* Codice di partenza
   Dall'oggetto user si crea la copia newUser
   Modificando newUser si aggiorna anche user
   Lo scopo dell'esercizio è avere due oggetti diversi

let user = {
  name: "Cosimo",
  age: 30,
};

let newUser = user;

newUser.name = "Paolo";

console.log(newUser);
console.log(user);

*/

let user = {
  name: "Cosimo",
  age: 30
};

let newUser = {}; // Una copia vuota

for (const info in user) {
  newUser[info] = user[info]; 
  // Non avrebbe funzionato se user avesse contenuto altri oggetti!
}

newUser.name = "Paolo";

console.log(user); // Stampa { name: 'Cosimo', age: 30 }
console.log(newUser); // Stampa { name: 'Paolo', age: 30 }