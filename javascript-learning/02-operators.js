//?/ Operators: are used to perform operations on variables and values.


//*/ 1. Arithmetic Operators
// Arithmetic operators are used to perform arithmetic on numbers.
console.log("Arithmetic Operators");

let x1 = 5;
let y1 = 2;

// Addition (+)
let sum = x1 + y1;
console.log("addition: ", sum); // 7

// Subtraction (-)
let difference = x1 - y1;
console.log("subtraction: ", difference); // 3

// Multiplication (*)
let product = x1 * y1;
console.log("multiplication: ", product); // 10

// Division (/)
let quotient = x1 / y1;
console.log("division: ", quotient); // 2.5

// Modulus (%)
let remainder = x1 % y1;
console.log("modulus: ", remainder); // 1

// Exponentiation (**)
let power = x1 ** y1;
console.log("exponentiation: ", power); // 5

// Increment (++)
x1++;
console.log("increment: ", x1); // 6

// Decrement (--)
y1--;
console.log("decrement: ", y1); // 1



//*/ 2. Assignment Operators
// Assignment operators are used to assign values to variables.
console.log("\n", "Assignment Operators");

let x2 = 5;
let y2 = 2;

// Assignment (=)
let assignment = x2 + y2;
console.log("assignment: ", assignment); // 7

// Addition assignment (+=)
x2 += y2;
console.log("addition assignment: ", x2); // 7

// Subtraction assignment (-=)
x2 -= y2;
console.log("subtraction assignment: ", x2); // 5

// Multiplication assignment (*=)
x2 *= y2;
console.log("multiplication assignment: ", x2); // 10

// Division assignment (/=)
x2 /= y2;
console.log("division assignment: ", x2); // 5

// Modulus assignment (%=)
x2 %= y2;
console.log("modulus assignment: ", x2); // 1

// Exponentiation assignment (**=)
x2 **= y2;
console.log("exponentiation assignment: ", x2); // 1



//*/ 3. Comparison Operators
// Comparison operators are used to compare two values.
console.log("\n", "Comparison Operators");

let x3 = 5;
let y3 = 2;

// Equal to (==)
console.log("equality (value): ", x3 == y3); // false

// Equal value and equal type (===)
console.log("strict equality (value and type): ", x3 === y3); // false

// Not equal (!=)
console.log("inequality (value): ", x3 != y3); // true

// Not equal value or not equal type (!==)
console.log("strict inequality (value and type): ", x3 !== y3); // true

// Greater than (>)
console.log("greater than: ", x3 > y3); // true

// Less than (<)
console.log("less than: ", x3 < y3); // false

// Greater than or equal to (>=)
console.log("greater than or equal to: ", x3 >= y3); // true

// Less than or equal to (<=)
console.log("less than or equal to: ", x3 <= y3); // false



//*/ 4. Logical Operators
// Logical operators are used to determine the logic between variables or values.
console.log("\n", "Logical Operators");

let x4 = true;
let y4 = false;

// Logical AND (&&)
console.log("logical AND: ", x4 && y4); // false

// Logical OR (||)
console.log("logical OR: ", x4 || y4); // true

// Logical NOT (!)
console.log("logical NOT: ", !x4); // false



//*/ 5. Bitwise Operators
// Bitwise operators are used to perform bitwise operations on variables.
console.log("\n", "Bitwise Operators");

let x5 = 5; // 101
let y5 = 2; // 010

// Bitwise AND (&)
let bitwiseAnd = x5 & y5;
console.log("bitwise AND: ", bitwiseAnd); // 0

// Bitwise OR (|)
let bitwiseOr = x5 | y5;
console.log("bitwise OR: ", bitwiseOr); // 7

// Bitwise XOR (^)
let bitwiseXor = x5 ^ y5;
console.log("bitwise XOR: ", bitwiseXor); // 7

// Bitwise NOT (~)
let bitwiseNot = ~x5;
console.log("bitwise NOT: ", bitwiseNot); // -6

// Left shift (<<)
let leftShift = x5 << 1;
console.log("left shift: ", leftShift); // 10

// Sign-propagating right shift (>>)
let rightShift = x5 >> 1;
console.log("right shift: ", rightShift); // 2

// Zero-fill right shift (>>>)
let zeroFillRightShift = x5 >>> 1;
console.log("zero-fill right shift: ", zeroFillRightShift); // 2



//*/ 6. Conditional (Ternary) Operator
// The conditional operator assigns a value to a variable based on a condition.
console.log("\n", "Conditional (Ternary) Operator");

let x6 = 5;
let y6 = 2;

let ternaryResult = x6 > y6 ? 'Yes' : 'No';
console.log("ternary operator: ", ternaryResult); // Yes



//*/ 7. Type Operators
// Type operators are used to determine the type of a variable.
console.log("\n", "Type Operators");

let x7 = 5;
let y7 = 'Hello';
let z7 = new Number(5);

// typeof
console.log("typeof x7: ", typeof x7); // number
console.log("typeof y7: ", typeof y7); // string
console.log("typeof z7: ", typeof z7); // object

// instanceof
console.log("instanceof x7: ", x7 instanceof Number); // false
console.log("instanceof y7: ", y7 instanceof String); // false
console.log("instanceof z7: ", z7 instanceof Number); // true



//*/ 8. Comma Operator
// The comma operator is used to evaluate multiple expressions.
// The comma operator evaluates each of its operands (from left to right) and returns the value of the last operand.
console.log("\n", "Comma Operator");

let x8 = 5;
let y8 = 2;

let commaResult = (x8 += 1, y8 += 1);
console.log("comma operator: ", commaResult); // returns just the last operand, 3

// in a for loop
for (let i = 0, j = 10; i <= j; i++, j--) { // increment i, decrement j in each iteration
    console.log("i: ", i, "j: ", j);
}

// in a return statement
function myFunction() {
    return (console.log('Hello'), 42); // returns 42 and prints Hello
}

console.log("comma operator in a return statement: ", myFunction()); // 42



//*/ 9. Unary Operators
// Unary operators are used to perform operations on a single operand.
console.log("\n", "Unary Operators");

let x9 = 5;

// Unary plus (+)
console.log("unary plus: ", +x9); // 5

// Unary minus (-)
console.log("unary minus: ", -x9); // -5

// Increment (++)
console.log("increment: ", ++x9); // 6

// Decrement (--)
console.log("decrement: ", --x9); // 5

// Logical NOT (!)
console.log("logical NOT: ", !x9); // false

// Bitwise NOT (~)
console.log("bitwise NOT: ", ~x9); // -6



//*/ 10. Relational Operators
// Relational operators are used to compare two values.
console.log("\n", "Relational Operators");

// in
let cars = ['BMW', 'Volvo', 'Mini'];
console.log("in: ", 0 in cars); // true because cars[0] is BMW

// in (other example)
let person = { firstName: 'John', lastName: 'Doe' };
console.log("in: ", 'firstName' in person); // true

// instanceof
let date = new Date();
console.log("instanceof: ", date instanceof Date); // true



//*/ 11. Spread Operator
// The spread operator is used to expand elements of an iterable object.
console.log("\n", "Spread Operator");

let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];
console.log("spread operator: ", arr2); // [1, 2, 3, 4, 5]



//*/ 12. Nullish Coalescing Operator
// The nullish coalescing operator is used to provide a default value when a variable is null or undefined.
console.log("\n", "Nullish Coalescing Operator (??)");

let x12 = null;
let y12 = x12 ?? 'default value';
console.log("nullish coalescing operator: ", y12); // default value



//*/ 13. Optional Chaining Operator
// The optional chaining operator is used to access nested properties without causing an error if a property is null or undefined.
console.log("\n", "Optional Chaining Operator (?.)");


let person2 = { name: 'John', address: { city: 'New York' } };
let city = person2.address?.city;
console.log("optional chaining operator: ", city); // New York
