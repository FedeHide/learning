//?/ Functions: are a block of code that can be called and executed whenever needed.
// They are used to perform a specific task. 
// Functions are defined using the function keyword, followed by a name, followed by parentheses () and a block of code enclosed in curly braces {}.

//*/ 1. Function Declaration: defines a named function.
function greet() {
    console.log('Hello, World!');
}

greet(); // Output: Hello, World!


//*/ 2. Function Expression: defines an unnamed function stored in a variable.
const greet2 = function() {
    console.log('Hello, World!');
};

greet2(); // Output: Hello, World!


//*/ 3. Arrow Function: defines a shorter syntax for writing function expressions.
const greet3 = () => {
    console.log('Hello, World!');
};

greet3(); // Output: Hello, World!


//*/ 4. Function Parameters: are used to pass values to a function.
function greet4(name) {
    console.log(`Hello, ${name}!`);
}

greet4('John'); // Output: Hello, John!


//*/ 5. Function Return: specifies the value returned by the function.
function greet5(name) {
    return `Hello, ${name}!`;
}

const message = greet5('John');
console.log(message); // Output: Hello, John!


//*/ 6. Default Parameters: assigns default values to parameters.
function greet6(name = 'World') {
    console.log(`Hello, ${name}!`);
}

greet6(); // Output: Hello, World!
greet6('John'); // Output: Hello, John!


//*/ 7. Rest Parameters: captures multiple arguments into an array.
function sum(...numbers) {
    let result = 0;

    numbers.forEach(number => {
        result += number;
    });

    return result;
}

const total = sum(1, 2, 3, 4, 5);

console.log(total); // Output: 15


//*/ 8. Spread Operator: spreads the elements of an array into individual arguments.
const numbers = [1, 2, 3, 4, 5];

function sum2(a, b, c, d, e) {
    return a + b + c + d + e;
}

const total2 = sum2(...numbers);

console.log(total2); // Output: 15


//*/ 9. Higher-Order Function: is a function that takes another function as an argument or returns a function.
function greet9() {
    return function() {
        console.log('Hello, World!');
    };
}  

const greeter = greet9();
greeter(); // Output: Hello, World!


//*/ 10. Callback Function: is a function passed into another function as an argument and executed inside the function.
function greet10(callback) {
    callback();
}

function sayHello() {
    console.log('Hello, World!');
}

greet10(sayHello); // Output: Hello, World!


//*/ 11. IIFE (Immediately Invoked Function Expression): is a function that is executed immediately after it is created.
(function() {
    console.log('Hello, World!');
})(); // Output: Hello, World!


//*/ 12. Closures: are functions that have access to variables from an outer function even after the outer function has finished executing.
function outer() {
    const name = 'John';

    function inner() {
        console.log(name);
    }

    return inner;
}

const closure = outer();
closure(); // Output: John


//*/ 13. Recursion: is a technique where a function calls itself to solve a problem.
function factorial(n) {
    if (n === 0) {
        return 1;
    }

    return n * factorial(n - 1);
}

const result = factorial(5);

console.log(result); // Output: 120


//*/ 14. Memoization: is an optimization technique used to speed up programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again.
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

console.log(memoizedSum(1, 2)); // Output: 3
