//?/ Async & await: are a way to work with promises in a more readable way.
//?/ The async function declaration defines an asynchronous function that returns an AsyncFunction object.
//?/ The await operator is used to wait for a Promise. It can only be used inside an async function.
//?/ Syntax:

async function fetchData() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    } finally {
        console.log('Data fetched!');
    }
}

fetchData();
//?/ Output: [ { id: 1, name: 'Leanne Graham', ... }, ... ]
//?/ Output: Data fetched!
//?/ The async function fetchData() fetches data from the API and logs it to the console.
//?/ The try block contains the code that may throw an error.
//?/ The await operator pauses the execution of the async function until the Promise is resolved.
//?/ The catch block handles the rejected Promise.
//?/ The finally block is executed after the try and catch blocks.
//?/ The fetchData() function is called at the end of the script.
