//?/ Variables
// Variables are containers for storing data values.

//*/ let: can be reassigned, but not redeclared.
// convention: camelCase

let myName = 'John';
console.log("myName: ", myName); // John
myName = 'Doe';
console.log("myName: ", myName); // Doe


//*/ const: cannot be reassigned, and not redeclared.
// convention: UPPERCASE_WITH_UNDERSCORES

const MY_FAVORITE_NUMBER = 7;
console.log("MY_FAVORITE_NUMBER :", MY_FAVORITE_NUMBER); // 7

//! MY_FAVORITE_NUMBER = 10; // TypeError: Assignment to constant variable.

//! you can't reassign a const variable, but you can mutate it. For example, if it's an array or object.
