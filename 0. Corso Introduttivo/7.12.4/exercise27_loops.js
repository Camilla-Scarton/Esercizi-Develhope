// Stampare i numeri pari da 0 a 20... 

// ...con un salto di 2
for (let i = 0; i < 21; i += 2) {
    console.log(i);
}

console.log("-----------------");

// ...con un salto di 1 e un controllo sul fatto di essere pari
for (let i = 0; i < 21; i += 1) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

console.log("-----------------");

// ...con un while e un salto di 2
let j = 0;
while (j < 21) {
    console.log(j);
    j += 2;
}

console.log("-----------------");

// ...con un while e un salto di 1 e un controllo sul fatto di essere pari
let k = 0;
while (k < 21) {
    if (k % 2 == 0) {
        console.log(k);
    }
    k++;
}