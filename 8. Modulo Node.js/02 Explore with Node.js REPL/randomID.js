// In the Node.js REPL, all methods and objects provided for the crypto module are shown by writing "global.crypto".
// In this list there is "randomUUID: [Function: randomUUID]".
// From docs, "the randomUUID() method of the Crypto interface is used to generate a v4 UUID using a cryptographically secure random number generator".
// UUID = Universally Unique Identifier

const crypto = require('crypto');

console.log(crypto.randomUUID()); // + "node randomID.js" in console to output something like "5ff73f24-f9cb-48c3-b9be-0acb19aac806"