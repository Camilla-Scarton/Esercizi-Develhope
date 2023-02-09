/**
 * START: Follow the instructions below.
 */

// The objects in the `countries` array use strings as the values of the
// `currency` properties.
// Complete this numeric enum so that it can be used instead of strings.
// Hint: Use the string values in the `currency` properties as the enum members.

enum Currency {

}

// Update the type for the `currency` property in this interface to use
// the `Currency` enum.

interface Country {
    name: string;
    currency: string;
}

// Replace the string values for the `currency` properties below with

const countries: Country[] = [
    {
        name: "France",
        currency: "Euro",
    },
    {
        name: "United States of America",
        currency: "Dollar",
    },
    {
        name: "Italy",
        currency: "Euro",
    },
    {
        name: "New Zealand",
        currency: "Dollar",
    },
];

// Create a string enum named `LanguageStatus`. Use it to replace the
// string values for the `status` properties in the objects below.

const countryLanguages = [
    { language: "Spanish", status: "primary" },
    { language: "English", status: "secondary" },
];

// ----

export {};
