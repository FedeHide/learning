//?/ Data Types: are the classification or categorization of data items. 
//It represents the kind of value that tells what operations can be performed on a particular data.



//*/ 1. Primitive Data Types
// Primitive data types are the most basic data types available in JavaScript.
// They are immutable (cannot be changed) and copied by value.


// 1.1. Number: is a data type that represents numeric values.
let number1 = 5;
let number2 = 3.14;
let number3 = NaN;
let number4 = Infinity;
let number5 = -Infinity;


// 1.2. String: is a data type that represents a sequence of characters.
let string1 = 'JavaScript';
let string2 = "Learning";
let string3 = `Programming`;
let string4 = 'I\'m learning JavaScript';


// 1.3. Boolean: is a data type that can have one of two values: true or false.
let boolean1 = true;
let boolean2 = false;


// 1.4. Undefined: is a variable that has been declared but not assigned a value. 
let undefined1;
let undefined2 = undefined;


// 1.5. Null: is a variable that has been explicitly assigned no value.
let null1 = null;
//! null is an object, but it is a primitive data type.


// 1.6. Symbol: is a data type that represents a unique identifier.
let symbol = Symbol('symbol'); 
// example 
let symbol1 = Symbol('symbol');
let symbol2 = Symbol('symbol');
console.log(symbol1 === symbol2); // false



// 1.7. BigInt: is a data type that represents large integers.
let bigInt = 1234567890123456789012345678901234567890n;
let bigInt2 = BigInt(1234567890123456789012345678901234567890n);



//*/ 2. Object Data Type
// Object data types are complex data types that can hold multiple values.
// They are mutable (can be changed) and copied by reference.


// 2.1. Object: is a data type that represents a collection of key-value pairs.
let object = { name: 'JavaScript', type: 'Programming Language' };


// 2.2. Array: is a data type that represents a list of elements.
let array = [1, 2, 3, 4, 5];


// 2.3. Function: is a data type that represents a block of code that can be called.
let function1 = function() {
    return 'Hello, World!';
};


// 2.4. Date: is a data type that represents a date and time.
let date = new Date();


// 2.5. RegExp: is a data type that represents a regular expression.
let regExp = /\w+/;


// 2.6. Error: is a data type that represents an error object.
let error = new Error('Error Message');



//*/ 3. Data Type Conversion
// Data type conversion is the process of converting one data type to another data type.

let numberMethod = Number('89'); // number
let stringMethod = String(123); // string
let booleanMethod = Boolean(1); // boolean
let intMethod = parseInt('42'); // integer
let floatMethod = parseFloat("3.52"); // float

// ! the main difference between Number() and parseInt() is that Number() will return NaN if the string cannot be converted to a number, while parseInt() will return the integer part of the string.


// 3.1. Implicit Conversion
// Implicit conversion is done automatically by JavaScript.
let implicitConversion = 5 + '5';
console.log("implicit conversion: ", implicitConversion); // 55


// 3.2. Explicit Conversion
// Explicit conversion is done manually by the developer.
let dataToConvert = 5;
let explicitConversion = String(dataToConvert);
console.log("explicit conversion: ", explicitConversion); // '5'


// 3.3. Type Coercion
// Type coercion is the process of converting one data type to another data type automatically by JavaScript.
let dataToConvert2 = 5;
let typeCoercion = dataToConvert + '';
console.log("type Coercion: ", typeCoercion); // '5'


// 3.4. Truthy and Falsy Values
// Truthy values are values that are considered true in JavaScript.
// Falsy values are values that are considered false in JavaScript.
let truthy1 = true;
let falsy1 = false;
let falsy2 = 0;
let falsy3 = '';
let falsy4 = null;
let falsy5 = undefined;
let falsy6 = NaN;
let truthy2 = [];
let truthy3 = {};

console.log("truthy1: ", Boolean(truthy1)); // true
console.log("falsy1: ", Boolean(falsy1)); // false
console.log("falsy2: ", Boolean(falsy2)); // false
console.log("falsy3: ", Boolean(falsy3)); // false
console.log("falsy4: ", Boolean(falsy4)); // false
console.log("falsy5: ", Boolean(falsy5)); // false
console.log("falsy6: ", Boolean(falsy6)); // false
console.log("truthy2: ", Boolean(truthy2)); // true
console.log("truthy3: ", Boolean(truthy3)); // true