//?/ Promises: are a way to handle asynchronous operations in JavaScript.

//*/ A Promise is in one of these states:
// - pending: initial state, neither fulfilled nor rejected.
// - fulfilled: meaning that the operation completed successfully.
// - rejected: meaning that the operation failed.



//*/ Syntax:

let promise = new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
}
);

promise
    .then(data => console.log(data))
    .catch(error => console.error(error))
    .finally(() => console.log('Data fetched!'));

//*/ Methods:
// - Promise.all(): waits for all promises to be resolved.
// - Promise.allSettled(): waits for all promises to be settled.
// - return Promise.resolve(): returns a resolved Promise.
// - return Promise.reject(): returns a rejected Promise.