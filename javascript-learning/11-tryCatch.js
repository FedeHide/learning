//?/ Try Catch Block: is used to handle errors in JavaScript. It allows you to catch errors and handle them gracefully.
//?/ The try block contains the code that may throw an error, and the catch block contains the code that handles the error.
//?/ The finally block contains the code that will be executed regardless of whether an error occurred or not.

try {
    let result = 1 / 0;
    console.log(result);
} catch (error) {
    console.error(error);
} finally {
    console.log('This block will always execute.');
}

// in this case, the try block contains the code that may throw an error (dividing by zero), 
// the catch block contains the code that handles the error (logging the error to the console), 
// and the finally block contains the code that will be executed regardless of whether an error occurred or not (logging a message to the console).


//?/ Throw Statement: is used to throw an exception in JavaScript.
//?/ You can throw any value as an exception, such as a string, number, object, or an error.

try {
    throw new Error('This is an error message.');
} catch (error) {
    console.error(error.message);
} finally {
    console.log('This block will always execute.');
}


//?/ Custom Error: You can create custom error types by extending the built-in Error class.

class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}

try {
    throw new CustomError('This is a custom error message.');
} catch (error) {
    console.error(error.message);
}


//?/ Error Handling Best Practices:
//?/ 1. Always handle errors in your code.
//?/ 2. Use specific error messages to help identify the cause of the error.
//?/ 3. Use try-catch blocks to handle synchronous errors.
//?/ 4. Use promises and async/await to handle asynchronous errors.
//?/ 5. Use custom error classes to create meaningful error types.
//?/ 6. Log errors to the console or a logging service for debugging purposes.
//?/ 7. Use error boundaries in React to handle errors in components.
//?/ 8. Use error tracking tools to monitor and track errors in production.
//?/ 9. Test your error handling code to ensure it works as expected.
//?/ 10. Document your error handling strategy to help other developers understand how to handle errors in your code.


//?/ Throwing different types of errors:
try {
    throw new Error('This is an error message.');
} catch (error) {
    console.error(error.message);
}

try {
    throw new TypeError('This is a type error message.'); //?/ It is thrown when a value is not of the expected type.
} catch (error) {
    console.error(error.message);
}

try {
    throw new RangeError('This is a range error message.'); //?/ It is thrown when a value is not within a specified range.
} catch (error) {
    console.error(error.message);
}

try {
    throw new ReferenceError('This is a reference error message.'); //?/ It is thrown when an invalid reference is used.
} catch (error) {
    console.error(error.message);
}

try {
    throw new SyntaxError('This is a syntax error message.'); //?/ It is thrown when a syntax error occurs in JavaScript code.
} catch (error) {
    console.error(error.message);
}

try {
    throw new URIError('This is a URI error message.'); //?/ It is thrown when a URI handling function is used incorrectly.
} catch (error) {
    console.error(error.message);
}

try {
    throw new EvalError('This is an eval error message.'); //?/ It is thrown when an error occurs during the evaluation of JavaScript code.
} catch (error) {
    console.error(error.message);
}