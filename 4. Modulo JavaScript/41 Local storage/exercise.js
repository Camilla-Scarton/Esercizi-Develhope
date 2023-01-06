const user = {
  id: 1,
  name: "John",
  age: 25,
};

// Dall'oggetto si crea un'associazione chiave-valore per il local storage
const saveUserInfo = (user) => localStorage.setItem(`user_${user.id}`, JSON.stringify(user));
saveUserInfo(user);

// Funzione che prende il valore in base alla chiave
const recoverUserInfo = (user) => localStorage.getItem(`user_${user.id}`);
// Stampa del valore
console.log(recoverUserInfo(user));

// NB: Nel local storage non sono salvati i cookie!