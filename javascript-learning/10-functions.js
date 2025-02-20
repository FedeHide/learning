//?/ Functions: are a block of code that can be called and executed whenever needed.


//*/ 1. Function Declaration: defines a named function.
console.log("\n", "1. Function Declaration:");
console.log("function nameOfFunction(parameters) { code }");

function sum(a, b) {
    return a + b;
}

console.log("sum(1, 2):", sum(41, 456)); // Output: 497


//*/ 2. Function Expression: defines an unnamed function stored in a variable.
console.log("\n", "2. Function Expression:");
console.log("const nameOfFunction = function(parameters) { code }");

const multiply = function(a, b) {
    return a * b;
}

console.log("multiply(2, 3):", multiply(2, 3)); // Output: 6


//*/ 3. Arrow Function: defines a shorter syntax for writing function expressions.
// main difference: does not have its own this, arguments, super, or new.target.
console.log("\n", "3. Arrow Function:");
console.log("const nameOfFunction = (parameters) => { code }");

const divide = (a, b) => {
    return a / b;
}

console.log("divide(6, 3):", divide(6, 3)); // Output: 2


//*/ 4. Function Parameters: are used to pass values to a function.
console.log("\n", "4. Function Parameters:");

function concatFour(a, b, c, d) {
    return a + b + c + d;
}

console.log("concatFour('a', 'b', 'c', 'd'):", concatFour('a', 'b', 'c', 'd')); // Output: abcd


//*/ 5. Function Return: specifies the value returned by the function.
console.log("\n", "5. Function Return:");

function submitFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

const fullName = submitFullName('John', 'Doe');
console.log("fullName:", fullName); // Output: John Doe


//*/ 6. Default Parameters: assigns default values to parameters.
console.log("\n", "6. Default Parameters:");

function catFood(catName, food = 'tuna') {
    return `${catName} eats ${food}!`;
}

console.log("catFood('Anya'):", catFood('Anya')); // Output: Anya eats tuna!


//*/ 7. Rest Parameters: captures multiple arguments into an array.
console.log("\n", "7. Rest Parameters:");

function sum(...numbers) {
    let result = 0;

    numbers.forEach(number => {
        result += number;
    });

    return result;
}

console.log("sum(1, 2, 3, 4, 5):", sum(1, 2, 3, 4, 5)); // Output: 15


//*/ 8. Spread Operator: spreads the elements of an array into individual arguments.
console.log("\n", "8. Spread Operator:");

const numbers = [1, 2, 3, 4, 5];

function multiply2(a, b, c, d, e) {
    return a * b * c * d * e;
}

console.log("multiply2(...numbers):", multiply2(...numbers)); // Output: 120


//*/ 9. Higher-Order Function: is a function that takes another function as an argument or returns a function.
console.log("\n", "9. Higher-Order Function:");

function catHobby(catName, hobby) {
    return hobby(catName);
}

function play(catName) {
    return `${catName} loves to play with toys!`;
}

console.log("catHobby('Ruki', play):", catHobby('Ruki', play)); // Output: Ruki loves to play with toys!


//*/ 10. Callback Function: is a function passed into another function as an argument and executed inside the function.
console.log("\n", "10. Callback Function:");

function carEngine(callback) {
    console.log('Starting the engine...');
    callback();
}

function drive() {
    console.log('Driving the car!');
}

carEngine(drive); // Output: Starting the engine... Driving the car!


//*/ 11. IIFE (Immediately Invoked Function Expression): is a function that is executed immediately after it is created.
console.log("\n", "11. IIFE (Immediately Invoked Function Expression):");

console.log("(function() { return 10 + 20; })():", (function() { return 10 + 20; })()); // Output: 30


//*/ 12. Closures: are functions that have access to variables from an outer function even after the outer function has finished executing.
console.log("\n", "12. Closures:");

function outerFunction() {
    const message = 'The secret code is 12345';

    function innerFunction() {
        return message;
    }

    return innerFunction;
}

const secretCode = outerFunction();
console.log("secretCode():", secretCode()); // Output: The secret code is 12345


//*/ 13. Recursion: is a technique where a function calls itself to solve a problem.
console.log("\n", "13. Recursion:");

function factorial(n) {
    if (n === 0) {
        return 1;
    }

    return n * factorial(n - 1);
}

console.log("factorial(5):", factorial(5)); // Output: 120


//*/ 14. Memoization: is an optimization technique used to speed up programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again.
console.log("\n", "14. Memoization:");

function memoize(fn) {
    const cache = {};

    return function(...args) {
        if (cache[args]) {
            return cache[args];
        }

        const result = fn(...args);
        cache[args] = result;

        return result;
    };
}

function sum3(a, b) {
    return a + b;
}

const memoizedSum = memoize(sum3);

console.log("memoizedSum(2, 3):", memoizedSum(2, 3)); // Output: 5


//*/ 15. Currying: is the process of converting a function that takes multiple arguments into a sequence of functions that each take a single argument.
console.log("\n", "15. Currying:");

function multiply4(a) {
    return function(b) {
        return function(c) {
            return a * b * c;
        };
    };
}

console.log("multiply4(2)(3)(4):", multiply4(2)(3)(4)); // Output: 24
