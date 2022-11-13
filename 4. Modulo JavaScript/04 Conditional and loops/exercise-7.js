function sumUntil(maxValue) {
  if (maxValue >= 0) {
    return maxValue * (maxValue + 1) / 2;
  } else {
    return -(maxValue * (maxValue - 1) / 2);
  }

  // let sum = 0;
  // if (maxValue > 0) {
  //   while (maxValue > 0) {
  //     sum = sum + maxValue;
  //     maxValue--;
  //   }
  //   /*
  //   let i = 1;
  //   while (i <= maxValue) {
  //     sum = sum + i;
  //     i++;
  //   }
  //   */
  //   /*
  //   for (let i = 0; i <= maxValue; i++) {
  //     sum = sum + i;
  //   }
  //   */
  //   return sum;
  // } else if (maxValue == 0) {
  //   return sum;
  // } else if (maxValue < 0) {
  //   return "Only positive numbers in input!";
  // }
}

console.log(sumUntil(5));
console.log(sumUntil(0));
console.log(sumUntil(-5));