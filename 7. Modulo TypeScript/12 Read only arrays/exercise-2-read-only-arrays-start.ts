/**
 * START: Follow the instructions below.
 */

// Prevent the array from being modified.
// Use the generic interface type `ReadonlyArray`: ReadonlyArray<type>
// This will cause a type error. Remove the code that now has a type error.

const languages: ReadonlyArray<string> = ["Mongolian", "French", "Basque", "Thai"];

//languages[2] = "Hausa"; <- Wrong code because languages is now readonly.

console.log(languages);

// Prevent the array from being modified.
// Use the readonly modifier and the array literal type syntax: readonly type[]
// This will cause a type error. Remove the code that now has a type error.

const currencies: readonly string[] = ["NZD", "THB", "NGN", "EUR", "COP", "INR"];

// currencies.reverse(); <- Wrong code because currencies is now readonly.

console.log(currencies);

// ----

export {};
