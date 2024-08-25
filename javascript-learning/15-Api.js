//?/ Api´s: are a set of rules that allow different software applications to communicate with each other. 
//?/ They are used when programming graphical interfaces (GUIs), web applications, and mobile applications. 
//?/ They are also used to connect different services, such as databases, to each other.

//*/ Fetch API: is used to make requests to a server and handle the response.

let urlBase = 'https://jsonplaceholder.typicode.com';
let query = 'comments?postId=5';
let requestBody = {
    title: 'Richard comment on your photo',
    body: 'What a beautiful photo!',
    userId: 1
}
let posteo = 5;
let requestBody2 = {
    id: 3,
    title: 'Richard comment on your photo',
    body: 'What a beautiful photo!',
    userId: 1
}
let modificacion = {
    title: 'This is a new title'
}
let post = 10;
let elementToDelete = 7;

//*/ GET: obtain information

// hard-coded
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => console.log(json))


// dynamic
fetch(`${urlBase}/${query}`)
    .then(response => response.json())
    .then(json => console.log(json))    




//*/ POST: send information

fetch(`${urlBase}/posts`, {
    method: 'POST',
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify(requestBody)
})
    .then(response => response.json())
    .then(json => console.log(json))




//*/ PUT: edit information

fetch(`${urlBase}/posts/${posteo}`, {
    method: 'PUT',
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify(requestBody2)
})
    .then(response => response.json())
    .then(json => console.log(json))




//*/ PATCH: modify information

fetch(`${urlBase}/posts/${post}`, {
    method: 'PATCH',
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify(modificacion)
})
    .then(Response => Response.json())
    .then(json => console.log(json))




//*/ DELETE: delete information

fetch(`${urlBase}/posts/${elementoAEliminar}`, {
    method: 'DELETE',
});



//?/ Date API: is used to work with dates in JavaScript.
//?/ It allows for the creation of date objects, as well as the manipulation and formatting of dates.

const currentDate = new Date(); // current date
const birthday = new Date('1989-09-08T15:00:00') // date format

//*/ Methods to work with dates

console.log(currentDate.toString()); // returns the date as a string
console.log(currentDate.toDateString()); // returns the date as a string
console.log(currentDate.toTimeString()); // returns the time as a string

console.log(currentDate.getMonth()); // returns the month
console.log(currentDate.getDate()); // returns the day
console.log(currentDate.getFullYear()); // returns the year


//?/ Local Storage API: is used to store data in the browser.
//?/ It allows for the storage of key-value pairs, which can be accessed and modified at a later time.

//*/ Methods to work with local storage

localStorage.setItem('name', 'John'); // stores data in local storage
localStorage.getItem('name'); // retrieves data from local storage
localStorage.removeItem('name'); // removes data from local storage
localStorage.clear(); // clears all data from local storage


//?/ History API: is used to work with the browser history.
//?/ It allows for the manipulation of the browser history, such as adding, replacing, and moving between history states.

//*/ Methods to work with history

history.back(); // moves back in the browser history
history.forward(); // moves forward in the browser history
history.go(2); // moves a specified number of steps in the browser history
history.pushState({ page: 1 }, 'title 1', '?page=1'); // adds a new state to the browser history


//?/ Validation API: is used to validate form data in the browser.
//?/ It allows for the validation of input fields, such as text, email, and password fields.

//*/ Methods to work with validation

const form = document.querySelector('form');
form.reportValidity(); // checks if the form is valid
form.checkValidity(); // checks if the form is valid
form.reset(); // resets the form
form.submit(); // submits the form
