const name = "Mario";
const lastname = "Rossi";
const age = 27;
const isGraduated = false;
const average = 27;
const examsCompleted = 10;
const firstYearCompleted = true;
const yearsCompleted = 1;

console.log(name == lastname); // -> false
console.log(age <= average); // -> true
console.log(firstYearCompleted == lastname); // (true == stringa NON vuota) -> false
console.log(yearsCompleted == firstYearCompleted); // (1 == true) -> true
console.log(firstYearCompleted === yearsCompleted); // (true === 1) -> false
console.log(examsCompleted < age); // -> true
console.log(isGraduated > yearsCompleted); // (false > 1 -> 0 > 1) -> false