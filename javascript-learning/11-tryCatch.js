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
