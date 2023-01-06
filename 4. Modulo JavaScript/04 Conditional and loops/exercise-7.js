function sumUntil(maxValue) {

  if (maxValue == 0) throw new Error("Not 0 in input!");
  if (maxValue < 0) throw new Error("Only positive numbers in input!");

  // Si crea un array vuoto con maxValue + 1 elementi: gli indici degli elementi vanno da 0 a maxValue
  const inputArrEmpty = new Array(maxValue + 1);
  // Si crea un array con l'operatore spread, a partire dagli indici dell'array precedente: [0, 1, 2, ..., maxValue]
  const inputArrFull = [...inputArrEmpty.keys()];
  // Si sommano fra di loro tutti i numeri con reduce(): ((...(( (0 + 1) + 2) + 3) ...) + maxValue)
  return inputArrFull.reduce((a,b) => a+b);

}

console.log(sumUntil(5));
//console.log(sumUntil(0));
//console.log(sumUntil(-5));



//function sumUntil(maxValue) {
  // Soluzione con formula
  // if (maxValue >= 0) {
  //   return maxValue * (maxValue + 1) / 2;
  // } else {
  //   return maxValue * (1 - maxValue) / 2;
  // }

  // Soluzione con gestione dell'input negativo
  // if (maxValue <= 0) throw new Error("Only positive numbers in input!");
  //
  // let sum = 0;
  // let i = 0;
  //
  // while (i <= maxValue) {
  //   sum+=i;
  //   i++;
  // }
  // return sum;
//}
