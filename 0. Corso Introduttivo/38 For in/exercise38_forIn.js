let car = {
    "name": "Peugeot",
    "color": "Black"
}

// Per stampare le chiavi
for (const key in car) {
    console.log(key);
}

console.log("----------");

// Per stampare i valori
for (const value in car) {
    console.log(car[value]);
}