//?/ Loops: are used to execute the same block of code a specified number of times.


//*/ 1. for loop: executes a block of code a specified number of times.
console.log("\n", "for loop");

let sum = 0;

for (let i = 1; i <= 5; i++) {
    sum += i;
    console.log("i:", i);
    console.log("sum:", sum); // Output: 1, 3, 6, 10, 15
}



//*/ 2. for...in loop: iterates over the properties of an object.
console.log("\n", "for...in loop");

const animalsInZoo = {
    Lion: 2,
    Elephant: 4,
    Bear: 3
};

for (let key in animalsInZoo) {
    console.log(`${key}: ${animalsInZoo[key]}`); // Output: Lion: 2, Elephant: 4, Bear: 3
}


//*/ 3. for...of loop: iterates over the values of an iterable object.
console.log("\n", "for...of loop");

const fruits = ['Apple', 'Banana', 'Cherry'];

for (let fruit of fruits) {
    console.log(fruit); // Output: Apple, Banana, Cherry
}


//*/ 4. for...each loop: iterates over the values of an array.
console.log("\n", "for...each loop");

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(number => {
    console.log(number ** 2); // Output: 1, 4, 9, 16, 25
});


//*/ 5. break statement: terminates the loop and transfers control to the code that follows the loop.
console.log("\n", "break statement");

let sum2 = 0;

for (let j = 1; j <= 8; j++) {
    if (j === 2) {
        console.log("j === 2 CONTINUE");
        continue; // skip the rest of the code inside the loop for the current iteration
    }
    sum2 += j;
    
    if (j === 6) {
        console.log("j === 6 BREAK");
        break; // break the loop when j is equal to 3
    }
    console.log("j:", j);
}

console.log("sum2:", sum2); // Output: 1, 3, 6



//*/ 6. while loop: executes a block of code as long as the condition is true.
console.log("\n", "while loop");

let n = 5;
let factorial = 1;

while (n > 0) {
    factorial *= n;
    console.log("n:", n);
    console.log("factorial:", factorial);
    n--;
}


//*/ 7. do...while loop: executes a block of code once, then repeats the loop as long as the condition is true.
console.log("\n", "do...while loop");

let m = 5;
let factorial2 = 1;

do {
    factorial2 *= m;
    console.log("m:", m);
    console.log("factorial2:", factorial2);
    m--;
} while (m > 4); 


//! When to use each loop:
// for loop: when you know the number of iterations.
// for...in loop: when you want to iterate over the properties of an object.
// for...of loop: when you want to iterate over the values of an iterable object.
// for...each loop: when you want to iterate over the values of an array.
// while loop: when you don't know the number of iterations.
// do...while loop: when you want to execute the block of code at least once.
