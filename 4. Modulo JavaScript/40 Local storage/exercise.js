const user = {
  id: 1,
  name: "John",
  age: 25,
};

function saveUserInfoInLocalStorage(user) {

  // La chiave è creata sulla base dell'id dello user per averla univoca: conviene averla senza spazi!
  localStorage.setItem(`user_${user.id}`, JSON.stringify(user)); 

}

saveUserInfoInLocalStorage(user);