//?/ Operators: are used to perform operations on variables and values.


//*/ 1. Arithmetic Operators
// Arithmetic operators are used to perform arithmetic on numbers.

let x = 5;
let y = 2;

// Addition (+)
let sum = x + y;
console.log(sum); // 7

// Subtraction (-)
let difference = x - y;
console.log(difference); // 3

// Multiplication (*)
let product = x * y;
console.log(product); // 10

// Division (/)
let quotient = x / y;
console.log(quotient); // 2.5

// Modulus (%)
let remainder = x % y;
console.log(remainder); // 1

// Increment (++)
x++;
console.log(x); // 6

// Decrement (--)
y--;
console.log(y); // 1

// Exponentiation (**)
let power = x ** y;
console.log(power); // 5


//*/ 2. Assignment Operators
// Assignment operators are used to assign values to variables.

let a = 5;
let b = 2;

// Assignment (=)
let c = a + b;
console.log(c); // 7

// Addition assignment (+=)
a += b;
console.log(a); // 7

// Subtraction assignment (-=)
a -= b;
console.log(a); // 5

// Multiplication assignment (*=)
a *= b;
console.log(a); // 10

// Division assignment (/=)
a /= b;
console.log(a); // 5

// Modulus assignment (%=)
a %= b;
console.log(a); // 1

// Exponentiation assignment (**=)
a **= b;
console.log(a); // 5


//*/ 3. Comparison Operators
// Comparison operators are used to compare two values.

let d = 5;
let e = 2;

// Equal to (==)
console.log(d == e); // false

// Not equal (!=)
console.log(d != e); // true

// Greater than (>)
console.log(d > e); // true

// Less than (<)
console.log(d < e); // false

// Greater than or equal to (>=)
console.log(d >= e); // true

// Less than or equal to (<=)
console.log(d <= e); // false


//*/ 4. Logical Operators
// Logical operators are used to determine the logic between variables or values.

let f = true;
let g = false;

// Logical AND (&&)
console.log(f && g); // false

// Logical OR (||)
console.log(f || g); // true

// Logical NOT (!)
console.log(!f); // false


//*/ 5. Bitwise Operators
// Bitwise operators are used to perform bitwise operations on variables.

let h = 5; // 101
let i = 2; // 010

// Bitwise AND (&)
let bitwiseAnd = h & i;
console.log(bitwiseAnd); // 0

// Bitwise OR (|)
let bitwiseOr = h | i;
console.log(bitwiseOr); // 7

// Bitwise XOR (^)
let bitwiseXor = h ^ i;
console.log(bitwiseXor); // 7

// Bitwise NOT (~)
let bitwiseNot = ~h;
console.log(bitwiseNot); // -6

// Left shift (<<)
let leftShift = h << 1;
console.log(leftShift); // 10

// Sign-propagating right shift (>>)
let rightShift = h >> 1;
console.log(rightShift); // 2

// Zero-fill right shift (>>>)
let zeroFillRightShift = h >>> 1;
console.log(zeroFillRightShift); //


//*/ 6. Conditional (Ternary) Operator
// The conditional operator assigns a value to a variable based on a condition.

let j = 5;
let k = 2;

let result = j > k ? 'Yes' : 'No';
console.log(result); // Yes


//*/ 7. Type Operators
// Type operators are used to determine the type of a variable.

let l = 5;
let m = 'Hello';

// typeof
console.log(typeof l); // number
console.log(typeof m); // string

// instanceof
console.log(l instanceof Number); // false
console.log(m instanceof String); // false


//*/ 8. Comma Operator
// The comma operator is used to evaluate multiple expressions.

let n = (5 + 2, 3 + 1);
console.log(n); // 4


//*/ 9. Unary Operators
// Unary operators are used to perform operations on a single operand.

let o = 5;

// Unary plus (+)
console.log(+o); // 5

// Unary minus (-)
console.log(-o); // -5

// Increment (++)
console.log(++o); // 6

// Decrement (--)
console.log(--o); // 5

// Logical NOT (!)
console.log(!o); // false

// Bitwise NOT (~)
console.log(~o); // -6


//*/ 10. Relational Operators
// Relational operators are used to compare two values.

let p = 5;
let q = 2;

// in
let r = [1, 2, 3];
console.log(2 in r); // true

// instanceof
let s = new Number(5);
console.log(s instanceof Number); // true


//*/ 11. Spread Operator
// The spread operator is used to expand elements of an iterable object.

let t = [1, 2, 3];
let u = [...t, 4, 5];
console.log(u); // [1, 2, 3, 4, 5]
