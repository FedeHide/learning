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
//?/ Output: [ { id: 1, name: 'Leanne Graham', ... }, ... ]
//?/ Output: Data fetched!