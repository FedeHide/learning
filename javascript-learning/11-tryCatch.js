//?/ Try Catch Block: is used to handle errors in JavaScript. It allows you to catch errors and handle them.
//?/ The try block contains the code that may throw an error, and the catch block contains the code that handles the error.
//?/ The finally block contains the code that will be executed regardless of whether an error occurred or not.

//*/ 1. Try Catch Syntax: 
console.log("\n", "1. Try Catch Syntax:");

let objectTest;

try {
    console.log(objectTest.email);
} catch (error) {
    console.log('An error occurred:', error.message);
} finally {
    console.log('This block will always execute.');
}

//! Is better to use console.error() instead of console.log() to log errors to the console. But in this file we are using console.log() to keep the code clean and secuencial.


//*/ 2. Throw Statement: is used to throw an exception. You can throw any value, including strings, numbers, objects, and errors. When an exception is thrown, the control flow is transferred to the nearest catch block that can handle the exception.
console.log("\n", "2. Throw Statement:");

try {
    throw new Error('This is an error message.');
} catch (error) {
    console.log(error.message);
} 


//*/ 3. Custom Error Class: is used to create custom error types. You can extend the Error class to create custom error classes with specific properties and methods.
console.log("\n", "3. Custom Error Class:");

class CustomError extends Error { // you can inherit from any other error class like TypeError, RangeError, ReferenceError, SyntaxError, URIError, EvalError.
    constructor(message, customProperty) {
        super(message);
        this.customProperty = customProperty;
    }
}

try {
    throw new CustomError('This is a custom error message.', 'customValue');
} catch (error) {
    console.log(error.message);
    console.log(error.customProperty);
}


//!/ Error Handling Best Practices:
//*/ 1. Always handle errors in your code.
//*/ 2. Use specific error messages to help identify the cause of the error.
//*/ 3. Use try-catch blocks to handle synchronous errors.
//*/ 4. Use promises and async/await to handle asynchronous errors.
//*/ 5. Use custom error classes to create meaningful error types.
//*/ 6. Log errors to the console or a logging service for debugging purposes.
//*/ 7. Use error boundaries in React to handle errors in components.
//*/ 8. Use error tracking tools to monitor and track errors in production.
//*/ 9. Test your error handling code to ensure it works as expected.
//*/ 10. Document your error handling strategy to help other developers understand how to handle errors in your code.


//*/ 4. Throwing different types of errors:
console.log("\n", "4. Throwing different types of errors:");

try {
    throw new Error('This is an generic error message. e.g. an error that does not fit into any other category.'); //?/ It is thrown when an error occurs that does not fit into any other category.
} catch (error) {
    console.log(error.message);
}

try {
    throw new TypeError('This is a type error message. e.g. trying to access a property of an undefined value.'); //?/ It is thrown when a value is not of the expected type.
} catch (error) {
    console.log(error.message);
}

try {
    throw new RangeError('This is a range error message. e.g. using an invalid index in an array.'); //?/ It is thrown when a numeric value is outside the valid range.
} catch (error) {
    console.log(error.message);
}

try {
    throw new ReferenceError('This is a reference error message. e.g. trying to access an undefined variable.'); //?/ It is thrown when a non-existent variable is referenced.
} catch (error) {
    console.log(error.message);
}

try {
    throw new SyntaxError('This is a syntax error message. e.g. using an invalid syntax in JavaScript code.'); //?/ It is thrown when a syntax error occurs in JavaScript code.
} catch (error) {
    console.log(error.message);
}

try {
    throw new URIError('This is a URI error message. e.g. using an invalid URI.'); //?/ It is thrown when a global URI handling function is used in a wrong way.
} catch (error) {
    console.log(error.message);
}

try {
    throw new EvalError('This is an eval error message. e.g. using the eval() function incorrectly.'); //?/ It is thrown when an error occurs during the execution of code by the eval() function.
} catch (error) {
    console.log(error.message);
}
