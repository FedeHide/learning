//?/ Promises: are a way to handle asynchronous operations in JavaScript.
//?/ They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code. 
//?/ Promises provide a cleaner way to handle asynchronous operations.
//?/ A Promise is an object representing the eventual completion or failure of an asynchronous operation.
//?/ A Promise is in one of these states:
//?/ - pending: initial state, neither fulfilled nor rejected.
//?/ - fulfilled: meaning that the operation completed successfully.
//?/ - rejected: meaning that the operation failed.
//?/ Syntax:

let promise = new Promise((resolve, reject) => {
    // asynchronous operation
    let success = true; // change to false to simulate error

    if (success) {
        resolve('Operation successful!');
    } else {
        reject('Operation failed!');
    }
});

promise.then(result => {
    console.log(result);
}).catch(error => {
    console.error(error);
});

//?/ Output: Operation successful! (if success is true)
//?/ Output: Operation failed! (if success is false)
