//?/ Objects: are a collection of key-value pairs. The keys are strings and the values can be anything. 
//?/ Objects are used to store data in a structured way. 


//*/ Object Literals: is a comma-separated list of key-value pairs (properties) wrapped in curly braces {}.
console.log("\n", "Object Literals", "\n");

let person = {
    name: 'John Doe',
    age: 30,
    isEmployed: true,
    address: {
        street: '123 Main St',
        city: 'New York',
        zip: '10001'
    },
    hobbies: ['reading', 'traveling', 'music']
};

console.log("object literal: ", person);


//*/ Object constructor: is used to create a new object with the specified properties and values.
console.log("\n", "Object Constructor", "\n");

let cat = new Object();
cat.name = 'Fluffy';
cat.age = 2;
cat.color = 'White';

console.log("object constructor: ", cat);


//*/ Object Properties: 
// The key is a string that uniquely identifies the property in the object.
// The value can be any data type, including another object or an array.
// The key-value pairs are separated by a colon (:).
// The key-value pairs are separated by commas (,).


//*/ Accessing Object Properties: you can access the properties of an object using the dot notation (.) or bracket notation ([]).
console.log("\n", "Accessing Object Properties", "\n");

console.log("person.name: ", person.name); // John Doe
console.log("person['age']: ", person['age']); // 30
console.log("person.address.city: ", person.address.city); // New York
console.log("person.hobbies[0]: ", person.hobbies[0]); // reading


//*/ Adding Properties: you can add new properties to an object by assigning a value to a new key.
console.log("\n", "Adding Properties", "\n");

person.email = 'john.doe@gmail.com';
console.log("add person.email: ", person.email); 


//*/ Updating Properties: you can update the value of an existing property by reassigning a new value to the key.
console.log("\n", "Updating Properties", "\n");

person.age = 35;
console.log("update person.age: ", person.age); // 35


//*/ Deleting Properties: you can delete a property from an object using the delete operator.
console.log("\n", "Deleting Properties", "\n");

delete person.isEmployed;
console.log("delete person.isEmployed: ", person.isEmployed); // undefined


//*/ Object Destructuring: is a way to extract properties from an object and assign them to variables.
console.log("\n", "Object Destructuring", "\n");

let { name, age, address } = person;
console.log("age: ", age); // 35
console.log("address: ", address); // {street: '123 Main St', city: 'New York', zip: '10001'}


//*/ Object Spread Operator: is used to create a shallow copy of an object.
console.log("\n", "Object Spread Operator", "\n");

let personCopy = { ...person };
console.log("personCopy: ", personCopy); // {name: 'John Doe', age: 35, address: {street: '123 Main St', city: 'New York', zip: '10001'}, hobbies: ['reading', 'traveling', 'music'], email: '


//*/ Object Methods: are functions that are stored as object properties.
console.log("\n", "Object Methods", "\n");

let car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2020,
    displayInfo: function () {
        return `${this.year} ${this.make} ${this.model}`;
    }
};

// displayInfo is a custom method of the car object that returns the year, make, and model of the car.
console.log("car.displayInfo(): ", car.displayInfo()); // 2020 Toyota Corolla

// Object.keys(): returns an array of the object's own enumerable property names.
let keys = Object.keys(person);
console.log("Object.keys(person): ", keys); // ['name', 'age', 'address', 'hobbies', 'email']


// Object.values(): returns an array of the object's own enumerable property values.
let values = Object.values(person);
console.log("Object.values(person): ", values); // ['John Doe', 35, {street: '123 Main St', city: 'New York', zip: '10001'}, ['reading', 'traveling', 'music'], '


// Object.entries(): returns an array of the object's own enumerable property key-value pairs.
let entries = Object.entries(person);
console.log("Object.entries(person): ", entries); // [['name', 'John Doe'], ['age', 35], ['address', {street: '123 Main St', city: 'New York', zip: '10001'}], ['hobbies', ['reading', 'traveling', 'music']], ['email', '


// Object.assign(): is used to copy the values of all enumerable own properties from one or more source objects to a target object.
let personInfo = {
    name: 'Jane Doe',
    age: 25
};

let newPerson = Object.assign({}, person, personInfo);
console.log("Object.assign(): ", newPerson); // {name: 'Jane Doe', age: 25, address: {street: '123 Main St', city: 'New York', zip: '10001'}, hobbies: ['reading', 'traveling', 'music'], email: '


// Object.getOwnPropertyDescriptors(): is used to get all own property descriptors of an object.
let descriptors = Object.getOwnPropertyDescriptors(person);
console.log("Object.getOwnPropertyDescriptors(person): ", descriptors);


// Object.create(): is used to create a new object with the specified prototype object and properties.
let personProto = {
    greet: function () {
        return `Hello, my name is ${this.name}`;
    }
};

let newPersonObj = Object.create(personProto);
newPersonObj.name = 'Alice';
console.log("Object.create(): ", newPersonObj.greet()); // Hello, my name is Alice


// Object.setPrototypeOf(): is used to set the prototype (i.e., the internal [[Prototype]] property) of an object.
Object.setPrototypeOf(newPersonObj, person);
console.log("Object.setPrototypeOf(newPersonObj, person): ", newPersonObj.name); // Alice


// Object.freeze(): is used to prevent the modification of an object.
Object.freeze(person);
person.age = 40; //! Cannot assign to read only property 'age' of object



// Object.seal(): is used to prevent the addition or deletion of properties from an object.
Object.seal(person);
person.address = '456 Main St'; //! Cannot add property address, object is not extensible


// Object.isFrozen(): is used to check if an object is frozen.
console.log("Object.isFrozen(person): ", Object.isFrozen(person)); // true


// Object.isSealed(): is used to check if an object is sealed.
console.log("Object.isSealed(person): ", Object.isSealed(person)); // true


// Object.isExtensible(): is used to check if new properties can be added to an object.
console.log("Object.isExtensible(person): ", Object.isExtensible(person)); // false


// Object.getOwnPropertyNames(): is used to get all own property names of an object.
let propertyNames = Object.getOwnPropertyNames(person);
console.log("Object.getOwnPropertyNames(person): ", propertyNames); // ['name', 'age', 'address', 'hobbies', 'email']


// Object.getPrototypeOf(): is used to get the prototype (i.e., the internal [[Prototype]] property) of an object.
let personPrototype = Object.getPrototypeOf(newPersonObj);
console.log("Object.getPrototypeOf(newPersonObj): ", personPrototype); // {name: 'John Doe', age: 35, address: {street: '123 Main St', city: 'New York', zip: '10001'}, hobbies: ['reading', 'traveling', 'music'], email


//*/ iterating over objects:

// for...in loop: iterates over the enumerable properties of an object.
for (let key in person) {
    console.log("for...in loop: ", `${key}:`, person[key]);
}
