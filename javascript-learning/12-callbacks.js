//?/ Callbacks: are functions that are passed as arguments to other functions.

function greet11(callback) {
    callback();
}

function sayHello() {
    console.log('Hello, World!');
}

greet11(sayHello); // Output: Hello, World!

