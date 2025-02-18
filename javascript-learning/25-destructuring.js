//?/ Destructuring: It is a JavaScript expression that makes it possible to unpack values from arrays or properties from objects into distinct variables.

//*/ Destructuring Arrays: is a way to extract values from an array and assign them to variables.
console.log("Destructuring Arrays");

const numbers = [1, 2, 3, 4, 5];
const [first, second, third] = numbers;
console.log("first: ", first); // 1
console.log("second: ", second); // 2
console.log("third: ", third); // 3


//*/ Destructuring Objects: is a way to extract properties from an object and assign them to variables.
console.log("\n", "Destructuring Objects");

const pokemon = { name: 'Pikachu', type: 'Electric', level: 25 };
const { name, type, level } = pokemon;
console.log("name: ", name); // Pikachu
console.log("type: ", type); // Electric
console.log("level: ", level); // 25


//*/ Destructuring Nested Objects: is a way to extract properties from nested objects and assign them to variables.
console.log("\n", "Destructuring Nested Objects");

const car = { 
    model: 'BMW', 
    engine: { cylinders: 4, size: 2.0 } 
};

const { model, engine: { cylinders, size } } = car;
console.log("model: ", model); // BMW
console.log("cylinders: ", cylinders); // 4
console.log("size: ", size); // 2.0


//*/ Destructuring Arrays with Rest Operator: is used to collect the remaining elements into a new array.
console.log("\n", "Destructuring Arrays with Rest Operator");

const books = ['Book 1', 'Book 2', 'Book 3', 'Book 4', 'Book 5'];
const [title, ...remainingBooks] = books;
console.log("title: ", title); // Book 1
console.log("remainingBooks: ", remainingBooks); // ['Book 2', 'Book 3', 'Book 4', 'Book 5']


//*/ Destructuring Objects with Rest Operator: is used to collect the remaining properties into a new object.
console.log("\n", "Destructuring Objects with Rest Operator");

const student = { nickname: 'Alice', age: 20 };
const { nickname, ...details } = student;
console.log("nickname: ", nickname); // Alice
console.log("details: ", details); // {age: 20}


//*/ Default Values in Destructuring: is used to assign default values to variables if the extracted value is undefined.
console.log("\n", "Default Values in Destructuring");

const animals = ['Dog', 'Cat'];
const [pet1, pet2 = 'Rabbit', wild1 = 'Wolf', wild2= 'Tiger'] = animals;
console.log("pet: ", pet1); // Dog
console.log("wild: ", wild1); // Wolf
console.log("pet: ", pet2); // Cat
console.log("wild: ", wild2); // Tiger


//*/ Swapping Variables using Destructuring: is a technique to swap the values of two variables without using a temporary variable.
console.log("\n", "Swapping Variables using Destructuring");

let a = 1;
let b = 2;
[a, b] = [b, a];
console.log("a: ", a); // 2
console.log("b: ", b); // 1


//*/ Destructuring Function Parameters: is a way to extract properties from an object passed as a function parameter.
console.log("\n", "Destructuring Function Parameters");

function greet({ name, age }) {
    console.log(`Hello, ${name}. You are ${age} years old.`);
}

const person2 = { name: 'John', age: 30 };
greet("person2: ", person2); // Hello, John. You are 30 years old.


//*/ Destructuring Function Return Values: is a way to extract values from an array returned by a function.
console.log("\n", "Destructuring Function Return Values");

function getValues() {
    return [1, 2, 3];
}

const [x, y, z] = getValues();
console.log("x: ", x); // 1
console.log("y: ", y); // 2
console.log("z: ", z); // 3


//*/ Destructuring with Map: is a way to extract key-value pairs from a Map object.
console.log("\n", "Destructuring with Map");

const map = new Map();
map.set('name', 'Alice');
map.set('age', 25);

for (const [key, value] of map) {
    console.log(`${key}: ${value}`);
}
// Output:
// name: Alice
// age: 25


//*/ Destructuring with Set: is a way to extract values from a Set object.
console.log("\n", "Destructuring with Set");

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


//*/ Destructuring with Strings: is a way to extract characters from a string.
console.log("\n", "Destructuring with Strings");

const str = 'Hello';
const [char1, char2, char3, char4, char5] = str;
console.log(char1, char2, char3, char4, char5); // Output: H e l l o


//*/ Destructuring with Regular Expressions: is a way to extract matched groups from a regular expression.
console.log("\n", "Destructuring with Regular Expressions");

const text = 'Hello, World!';
const pattern = /(\w+), (\w+)!/;
const [, word1, word2] = text.match(pattern);
console.log(word1, word2); // Output: Hello World


//*/ Destructuring with JSON: is a way to extract properties from a JSON string.
console.log("\n", "Destructuring with JSON");

const json = '{"name": "John", "age": 30}';
const { name: personName, age: personAge } = JSON.parse(json);
console.log(personName, personAge); // Output: John 30


//*/ Destructuring with Promises: is a way to extract resolved values from a Promise object.
console.log("\n", "Destructuring with Promises");

const fetchData = () => Promise.resolve({ data: 'Data' });

fetchData().then(({ data }) => {
    console.log(data);
}
);
// Output: Data
