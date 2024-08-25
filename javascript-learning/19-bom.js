//?/ BOM: Browser Object Model is a set of objects that allow us to interact with the browser.

//*/ window object is the main object in the BOM, it represents the browser window or tab.

//*/ Methods of the window object:

// alert() -> shows an alert box with a message and an OK button.
alert('Hello World!');

// prompt() -> shows a prompt box with a message, an input field for the user, and OK and Cancel buttons.
prompt('Please enter your name');

// confirm() -> shows a confirm box with a message, OK and Cancel buttons.
confirm('Are you sure?');

// open() -> opens a new browser window or a new tab.
open('https://google.com');

// close() -> closes the current browser window.
close();

//*/ Properties of the window object:

// innerWidth -> returns the inner width of the browser window.
console.log(window.innerWidth);

// innerHeight -> returns the inner height of the browser window.
console.log(window.innerHeight);

// outerWidth -> returns the outer width of the browser window.
console.log(window.outerWidth);

// outerHeight -> returns the outer height of the browser window.
console.log(window.outerHeight);

// location -> returns an object with information about the current URL.
console.log(window.location);

// navigator -> returns an object with information about the browser.
console.log(window.navigator);

// history -> returns an object with the browser's history.
console.log(window.history);

// screen -> returns an object with information about the user's screen.
console.log(window.screen);

// document -> returns the document object for the window.
console.log(window.document);

// setTimeout() -> calls a function or evaluates an expression after a specified number of milliseconds.
setTimeout(() => {
    console.log('Hello World!');
}, 3000);

// clearTimeout() -> stops the execution of the function specified in setTimeout().
let timeout = setTimeout(() => {
    console.log('Hello World!');
}, 3000);

clearTimeout(timeout);

// setInterval() -> calls a function or evaluates an expression at specified intervals (in milliseconds).
setInterval(() => {
    console.log('Hello World!');
}, 1000);

// clearInterval() -> stops the execution of the function specified in setInterval().
let interval = setInterval(() => {
    console.log('Hello World!');
}, 1000);

clearInterval(interval);


//*/ Cookies: small pieces of data stored in the user's browser.

//*/ Methods for working with cookies:

// document.cookie -> returns a string with all cookies for the site.
console.log(document.cookie);

// document.cookie = 'name=ruki; expires=1 Jan 2024 01:00:00 UTC' -> creates a cookie with a name and value, and an expiration date.
document.cookie = 'name=ruki; expires=1 Jan 2024 01:00:00 UTC';

//*/ Form to get the user from the cookies:

let user;

const cookies = document.cookie.split(';');

cookies.forEach((cookie) => {
    const propiedad = cookie.split('=')[0];
    if(propiedad === 'name') {
        user = cookie.split('=')[1];
    }
});

if(user) {
    console.log(`Hello ${user}`);
} else {
    console.log('please log in');
}

//*/ Form to create a cookie:

const createCookie = () => {
    document.cookie = 'name=ruki; expires=1 Jan 2024 01:00:00 UTC';
}

//*/ Form to start a session:

const logIn = () => {
    const user = prompt('User:');
    document.cookie = `name=${user}; expires=1 Jan 2024 01:00:00 UTC`;
    alert('Session started');
}

//*/ Form to close a session:

const cerrarSesion = () => {
    document.cookie = 'name=; expires=1 Jan 2022 01:00:00 UTC';
}


