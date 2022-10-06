const smartphone = {
  brand: "Apple",
  name: "Iphone 13",
  price: 1300,
};

Object.freeze(smartphone);

smartphone.price = 100; // Non funziona più aggiungendo freeze

console.log(smartphone); // Stampa l'oggetto di partenza