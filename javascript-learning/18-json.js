//?/ Json: JavaScript Object Notation is a lightweight data-interchange format. It is easy for humans to read and write. 

//*/ Types of data that we can use in JSON:
//- text string
//- numbers
//- objects (in JSON format)
//- arrays
//- booleans
//- null

//! Types of data that we CANNOT use in JSON:
//- functions
//- date objects
//- undefined

//*/ JSON Syntax Rules
//- Data is in name/value pairs
//- Data is separated by commas
//- Curly braces hold objects
//- Square brackets hold arrays


//*/ import JSON from a file
import { readFileSync } from 'fs';
const data = readFileSync('18b-json.json', 'utf8'); // readFileSync: read the content of the file
console.log("data: ", data); 


// //*/ parse(): we pass it a text string in JSON format and it returns a JavaScript object.
console.log("\n", "JSON Parse: ");

const object = JSON.parse(data); // parse: convert the JSON string to a JavaScript object
console.log("parse (JSON -> object): ", object); 


//*/ stringify(): allows us to pass a JavaScript object and it returns a text string with the object in JSON format
console.log("\n", "JSON Object: ");

const user = {
    name: 'Ruki',
    email: 'elpurri@gmail.com',
    favoriteColors: ['blue', 'red', 'black'],
};

const userJson = JSON.stringify(user); // stringify: convert the JavaScript object to a JSON string
console.log("user (object): ", user); 
console.log("stringify (object -> json): ", userJson); 


// json array: is an array that contains JSON objects
console.log("\n", "JSON Array: ");

const users = [
    {
        name: 'Ruki',
        email: 'elpurri@gmail.com',
        favoriteColors: ['blue', 'red', 'black'],
    },
    {
        name: 'Anya',
        email: 'nanitas@gmail.com',
        favoriteColors: ['green', 'yellow', 'white'],
    },
];

const usersJson = JSON.stringify(users); // stringify: convert the JavaScript object to a JSON string
console.log("users (object): ", users);
console.log("stringify (object -> json): ", usersJson);