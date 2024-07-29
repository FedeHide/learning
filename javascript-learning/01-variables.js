//?/ Variables
// Variables are containers for storing data values.
// convention: camelCase

//*/ let: can be reassigned, but not redeclared.

let myName = 'John';
console.log(myName); // John
myName = 'Doe';
console.log(myName); // Doe


//*/ const: cannot be reassigned, and not redeclared.

const myAge = 30;
console.log(myAge); // 30
// myAge = 31; // TypeError: Assignment to constant variable.
