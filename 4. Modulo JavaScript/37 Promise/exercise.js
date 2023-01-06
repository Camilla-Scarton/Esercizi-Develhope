const number = 5;

let greaterThan10 = (num) => 
new Promise((resolve, reject) => {
    if (num>10) resolve(num);
    reject(num);
})

greaterThan10(number)
    .then(num => console.log(`${num} is greater than 10`))
    .catch(num => console.log(`${num} is NOT greater than 10`));



// Soluzione alternativa
//
// let greaterThan10 = new Promise((resolve, reject) => {
//     if (number>10) resolve(number);
//     reject(number);
// })

// greaterThan10
//     .then(num => console.log(`${num} is greater than 10`))
//     .catch(num => console.log(`${num} is NOT greater than 10`));