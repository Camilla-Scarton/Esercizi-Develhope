const user = {
  id: 1,
  name: "John",
  age: 25,
};

function saveUserInfoInLocalStorage(user) {

  // La chiave per il cookie è creata sulla base dell'id dello user per averla univoca
  localStorage.setItem(`user ${user.id}`, JSON.stringify(user)); 

}

saveUserInfoInLocalStorage(user);