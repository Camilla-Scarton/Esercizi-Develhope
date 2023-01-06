function multiplyByTwo(value) {
  let number = 2;
  function inner() {
    return value*number;
  }
  // Versione arrow function: let inner = () => value*number;
  return inner;
}

console.log(multiplyByTwo(4)());