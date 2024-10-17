//?/ Destructuring: It is a JavaScript expression that makes it possible to unpack values from arrays, 
//?/ or properties from objects, into distinct variables.

//?/ Destructuring Arrays:
const numbers = [1, 2, 3, 4, 5];
const [first, second, third] = numbers;
console.log(first, second, third); // Output: 1 2 3

//?/ Destructuring Objects:
const person = { name: 'John', age: 30 };
const { name, age } = person;
console.log(name, age); // Output: John 30

//?/ Destructuring Nested Objects:
const car = { 
    model: 'BMW', 
    engine: { cylinders: 4, size: 2.0 } 
};

const { model, engine: { cylinders, size } } = car;
console.log(model, cylinders, size); // Output: BMW 4 2.0


//?/ Destructuring Arrays with Rest Operator:
const books = ['Book 1', 'Book 2', 'Book 3', 'Book 4', 'Book 5'];
const [title, ...remainingBooks] = books;
console.log(title); // Output: Book 1
console.log(remainingBooks); // Output: ['Book 2', 'Book 3', 'Book 4', 'Book 5']

//?/ Destructuring Objects with Rest Operator:
const student = { nickname: 'Alice', age: 20 };
const { nickname, ...details } = student;
console.log(nickname); // Output: Alice
console.log(details); // Output: { age: 20 }

//?/ Default Values in Destructuring:
const animals = ['Dog', 'Cat'];
const [pet = 'Rabbit', wild = 'Lion'] = animals;
console.log(pet, wild); // Output: Dog Cat

//?/ Swapping Variables using Destructuring:
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a, b); // Output: 2 1

//?/ Destructuring Function Parameters:
function greet({ name, age }) {
    console.log(`Hello, ${name}. You are ${age} years old.`);
}

const person2 = { name: 'John', age: 30 };
greet(person2); // Output: Hello, John. You are 30 years old.

//?/ Destructuring Function Return Values:
function getValues() {
    return [1, 2, 3];
}

const [x, y, z] = getValues();
console.log(x, y, z); // Output: 1 2 3

//?/ Destructuring with Map:
const map = new Map();
map.set('name', 'Alice');
map.set('age', 25);

for (const [key, value] of map) {
    console.log(`${key}: ${value}`);
}
// Output:
// name: Alice
// age: 25

//?/ Destructuring with Set:
const set = new Set();
set.add('Apple');
set.add('Banana');
set.add('Orange');

for (const fruit of set) {
    console.log(fruit);
}

// Output:
// Apple
// Banana
// Orange


//?/ Destructuring with Strings:
const str = 'Hello';
const [char1, char2, char3, char4, char5] = str;
console.log(char1, char2, char3, char4, char5); // Output: H e l l o

//?/ Destructuring with Regular Expressions:
const url = 'https://www.example.com';
const [, protocol, domain,] = url.match(/(https?):\/\/(www\..+?)\//);
console.log(protocol, domain); // Output: https www.example.com

//?/ Destructuring with JSON:
const json = '{"name": "John", "age": 30}';
const { name: personName, age: personAge } = JSON.parse(json);
console.log(personName, personAge); // Output: John 30

//?/ Destructuring with Promises:
const fetchData = () => Promise.resolve({ data: 'Data' });

fetchData().then(({ data }) => {
    console.log(data);
}
);
// Output: Data

