//?/ Forms - are used to collect user input. The input can be of different types like text, password, radio, checkbox, etc.
//?/ The form data is sent to the server for processing.
//?/ Forms can be created using the <form> element.

// HTML example:
// <form id="myForm" action="/submit-form" method="POST">
// 	<label for="name">Name:</label>
// 	<input type="text" id="name" name="name">

// 	<label for="email">Email:</label>
// 	<input type="email" id="email" name="email">

// 	<button type="submit">Submit</button>
// </form>

//?/ The form element has two important attributes:
//?/ 1. action: It specifies the URL where the form data should be sent.
//?/ 2. method: It specifies the HTTP method to be used when submitting the form data.

//*/ Accessing Form Elements
//*/ 1. Using the form property of the document object.

const form = document.forms['myForm'];
const nameInput = form.elements['name'];
const emailInput = form.elements['email'];
const emailValue = document.forms['myForm']['email'].value;


//*/ 2. Using the getElementById() method.

const nameInput2 = document.getElementById('name');
const emailInput2 = document.getElementById('email');
const emailValue2 = document.getElementById('email').value;


//*/ 3. form events - submit, change, focus, blur, keydown, keyup, etc.

// submit - The submit event is fired when a form is submitted.
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Form submitted');
});

// change - The change event is fired when the value of an element has been changed.
form.elements['name'].addEventListener('change', (e) => {
    console.log('Name changed');
});

// focus - The focus event is fired when an element has received focus.
form.elements['email'].addEventListener('focus', (e) => {
    console.log('Email focused');
});

// blur - The blur event is fired when an element has lost focus.
form.elements['email'].addEventListener('blur', (e) => {
    console.log('Email blurred');
});

// keydown - The keydown event is fired when a key is pressed down.
form.elements['email'].addEventListener('keydown', (e) => {
    console.log('Keydown event');
});

// keyup - The keyup event is fired when a key is released.
form.elements['email'].addEventListener('keyup', (e) => {
    console.log('Keyup event');
});



//*/ 4. Form Validation - The form validation is done to ensure that the user has entered the correct data.

// Example: Validate a form with email, password, and confirm password fields.
const form3 =  document.forms['myForm3'];
const emailRegex = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;

form3.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = {
        email: form3.elements['email'].value,
        password: form3.elements['password'].value,
        confirmPassword: form3.elements['confirmPassword'].value
    };

    if(!emailRegex.test(data.email)) {
        console.log('Invalid email');
        return;
    }

    if(data.password.length < 6) {
        console.log('Password must be at least 6 characters long');
        return;
    }

    if(data.password !== data.confirmPassword) {
        console.log('Passwords do not match');
        return;
    }

    console.log('Form submitted');
    console.log(data);
});

