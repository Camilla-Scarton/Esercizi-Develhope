let age = 23;

if (age > 18) {
    console.log("You can drive a car");
} else {
    console.log("You are too young to drive");
} 

// Extra controllo
if (age  > 18) {
    if (age < 100) {
        console.log("You can drive a car");
    } else {
        console.log("You are too old to drive");
    }
} else {
    console.log("You are too young to drive")
}

// Volendo l'ultimo else con un'unica istruzione può essere scritto con l'istruzione appena di fianco, senza parentesi