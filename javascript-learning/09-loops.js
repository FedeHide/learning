//?/ Loops: are used to execute the same block of code a specified number of times.


//*/ 1. for loop: executes a block of code a specified number of times.
let sum = 0;

for (let i = 1; i <= 5; i++) {
    sum += i;
}

console.log(sum); // Output: 15


//*/ 2. for...in loop: iterates over the properties of an object.
const person = {
    name: 'John',
    age: 30
};

for (let key in person) {
    console.log(`${key}: ${person[key]}`); // Output: name: John, age: 30
}


//*/ 3. for...of loop: iterates over the values of an iterable object.
const fruits = ['Apple', 'Banana', 'Cherry'];

for (let fruit of fruits) {
    console.log(fruit); // Output: Apple, Banana, Cherry
}


//*/ 4. for...each loop: iterates over the values of an array.
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(number => {
    console.log(number); // Output: 1, 2, 3, 4, 5
});


//*/ 5. break statement: terminates the loop and transfers control to the code that follows the loop.
let sum2 = 0;

for (let j = 1; j <= 5; j++) {
    sum2 += j;

    if (j === 3) {
        break;
    }
}

console.log(sum2); // Output: 6


//*/ 6. while loop: executes a block of code as long as the condition is true.
let n = 5;
let factorial = 1;

while (n > 0) {
    factorial *= n;
    n--;
}

console.log(factorial); // Output: 120


//*/ 7. do...while loop: executes a block of code once, then repeats the loop as long as the condition is true.
let m = 5;
let factorial2 = 1;

do {
    factorial2 *= m;
    m--;
} while (m > 0);

console.log(factorial2); // Output: 120


