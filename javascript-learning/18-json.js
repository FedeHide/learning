//?/ Json: JavaScript Object Notation is a lightweight data-interchange format. It is easy for humans to read and write. 
//?/ It is easy for machines to parse and generate.
//?/ It is based on a subset of the JavaScript Programming Language, Standard ECMA-262 3rd Edition - December 1999.

//*/ Types of data that we can use in JSON:
//- text string
//- numbers
//- objects (in JSON format)
//- arrays
//- booleans
//- null

//Types of data that we CANNOT use in JSON:
//- functions
//- date objects
//- undefined


//*/ Methods to work with JSON

//*/ parse(): we pass it a text string in JSON format and it returns a JavaScript object.
const datos = `
{
    "id": 1,
    "name": "ruki",
    "active_subscriber": true,
    "posts": [
        {
            "id": 1,
            "title": "Title of the first post",
            "text": "text of the first post ..."
        },
        {
            "id": 2,
            "title": "Title of the second post",
            "text": "text of the second post ..."
        }
    ]
}
`;
const object = JSON.parse(datos);
console.log(object.name);


//*/ stringify(): allows us to pass a JavaScript object and it returns a text string with the object in JSON format
const user = {
    name: 'Ruki',
    email: 'elpurrigmail.com',
    favoriteColors: ['blue', 'red', 'black'],
};

const userJson = JSON.stringify(user);
console.log(userJson); // Output: {"name":"Ruki","email":"elpurrigmail.com","favoriteColors":["blue","red","black"]}