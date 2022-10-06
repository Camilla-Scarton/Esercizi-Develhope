/* Da modificare in modo tale che col secondo termine si abbia true come risultato
10 < 11 -> true
45 == 34 -> false
true === 1 -> false
false === 0 -> false
1 == 0 -> false
4 <= 2 -> false
4 >= 8 -> false
*/

// Devono stampare tutti true
console.log(10 < 11);
console.log(45 == 45); 
console.log(45 == "45"); // va bene uguale
console.log(true === true);
console.log(false === false);
console.log(1 == 1); 
console.log(1 == "1"); // va bene uguale
console.log(4 <= 20);
console.log(4 >= 3);