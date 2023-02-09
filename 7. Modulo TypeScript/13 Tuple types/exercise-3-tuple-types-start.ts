/**
 * START: Follow the instructions below.
 */

// Add a tuple type annotation for this tuple.

const countryPopulation = ["China", 1_412_600_000];

// Change the `CountryWithPopulation` type into a tuple type.
// This should fix the type error on Line 14.

type CountryWithCurrency = [];

const countryCurrency: CountryWithCurrency = ["Italy", "Euro", "EUR"];

// Add a tuple type annotation that prevents this tuple from being modified.
// Use the readonly modifier and the tuple type syntax: readonly [type, type]
// This will cause a type error. Remove the code that now has a type error.

const countryLanguage = ["Greece", "Greek"];

countryLanguage.reverse();

console.log(countryLanguage);

// ----

export {};
