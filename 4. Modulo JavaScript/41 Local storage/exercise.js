const user = {
  id: 1,
  name: "John",
  age: 25,
};

// Dall'oggetto si crea il cookie
const saveUserInfo = (user) => localStorage.setItem(`user ${user.id}`, JSON.stringify(user));
saveUserInfo(user);

// Funzione che prende il valore del cookie
const recoverUserInfo = (user) => localStorage.getItem(`user ${user.id}`);
// Stampa del valore del cookie in console
console.log(recoverUserInfo(user));