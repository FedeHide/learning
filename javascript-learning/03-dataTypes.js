//?/ Data Types: are the classification or categorization of data items. 
//It represents the kind of value that tells what operations can be performed on a particular data.



//*/ 1. Primitive Data Types
// Primitive data types are the most basic data types available in JavaScript.
// They are immutable (cannot be changed) and copied by value.


// 1.1. Number: is a data type that represents numeric values.
let a = 5;
let b = 3.14;
let c = NaN;
let d = Infinity;
let e = -Infinity;


// 1.2. String: is a data type that represents a sequence of characters.
let f = 'JavaScript';
let g = "Learning";
let h = `Programming`;
let i = 'I\'m learning JavaScript';


// 1.3. Boolean: is a data type that can have one of two values: true or false.
let j = true;
let k = false;


// 1.4. Undefined: is a variable that has been declared but not assigned a value. 
let l;
let m = undefined;


// 1.5. Null: is a variable that has been explicitly assigned no value.
let n = null;


// 1.6. Symbol: is a data type that represents a unique identifier.
let o = Symbol('symbol'); 


//*/ 2. Object Data Type
// Object data types are complex data types that can hold multiple values.
// They are mutable (can be changed) and copied by reference.


// 2.1. Object: is a data type that represents a collection of key-value pairs.
let p = { name: 'JavaScript', type: 'Programming Language' };


// 2.2. Array: is a data type that represents a list of elements.
let q = [1, 2, 3, 4, 5];


// 2.3. Function: is a data type that represents a block of code that can be called.
let r = function() {
    return 'Hello, World!';
};


// 2.4. Date: is a data type that represents a date and time.
let s = new Date();


// 2.5. RegExp: is a data type that represents a regular expression.
let t = /\w+/;


// 2.6. Error: is a data type that represents an error object.
let u = new Error('Error Message');



//*/ 3. Data Type Conversion
// Data type conversion is the process of converting one data type to another data type.

Number (); // numero
parseInt (); // integer
parseFloat (); // float
string (); // string


// 3.1. Implicit Conversion
// Implicit conversion is done automatically by JavaScript.
let v = 5 + '5';
console.log(v); // 55


// 3.2. Explicit Conversion
// Explicit conversion is done manually by the developer.
let w = 5;
let x = String(w);
console.log(x); // '5'


// 3.3. Type Coercion
// Type coercion is the process of converting one data type to another data type automatically by JavaScript.
let y = 5;
let z = y + '';
console.log(z); // '5'


// 3.4. Truthy and Falsy Values
// Truthy values are values that are considered true in JavaScript.
// Falsy values are values that are considered false in JavaScript.
let aa = true;
let bb = false;
let cc = 0;
let dd = '';
let ee = null;
let ff = undefined;
let gg = NaN;
let hh = [];
let ii = {};

console.log(Boolean(aa)); // true
console.log(Boolean(bb)); // false
console.log(Boolean(cc)); // false
console.log(Boolean(dd)); // false
console.log(Boolean(ee)); // false
console.log(Boolean(ff)); // false
console.log(Boolean(gg)); // false
console.log(Boolean(hh)); // true
console.log(Boolean(ii)); // true
