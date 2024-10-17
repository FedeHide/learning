//?/ Objects: are a collection of key-value pairs. The keys are strings and the values can be anything. 
//?/ Objects are used to store data in a structured way. 
//?/ Objects are used to represent real-world entities.

//?/ Syntax:
//?/ Objects can be created using the object literal syntax, which is the most common way to create objects in JavaScript.

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




//?/ The key-value pairs are separated by a colon (:).
//?/ The key is also known as a property of the object.
//?/ The value can be a primitive data type (string, number, boolean, null, undefined) or a complex data type (object, array, function).
//?/ The key-value pairs are also known as properties of the object.


//?/ Accessing Object Properties:
//?/ You can access the properties of an object using the dot notation or bracket notation.

console.log(person.name); // John Doe
console.log(person.age); // 30
console.log(person.isEmployed); // true
console.log(person.address.street); // 123 Main St
console.log(person.address.city); // New York
console.log(person.address.zip); // 10001
console.log(person.hobbies); // ['reading', 'traveling', 'music']


//?/ Adding Properties:
//?/ You can add new properties to an object by assigning a value to a new key.

person.email = 'john.doe@gmail.com';
console.log(person.email); // john.doe@gmail.com


//?/ Updating Properties:
//?/ You can update the value of an existing property by assigning a new value to the key.

person.age = 35;
console.log(person.age); // 35


//?/ Deleting Properties:
//?/ You can delete a property from an object using the delete operator.

delete person.isEmployed;
console.log(person.isEmployed); // undefined


//?/ Object Methods:
//?/ Objects can also have methods, which are functions that are associated with an object.

let car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2020,
    displayInfo: function () {
        return `${this.year} ${this.make} ${this.model}`;
    }
};

// displayInfo is a method of the car object that returns the year, make, and model of the car.
console.log(car.displayInfo()); // 2020 Toyota Corolla


// Object.keys(): returns an array of the object's own enumerable property names.

let keys = Object.keys(person);
console.log(keys); // ['name', 'age', 'address', 'hobbies', 'email']


// Object.values(): returns an array of the object's own enumerable property values.

let values = Object.values(person);
console.log(values); // ['John Doe', 35, {street: '123 Main St', city: 'New York', zip: '10001'}, ['reading', 'traveling', 'music'], '


// Object.entries(): returns an array of the object's own enumerable property key-value pairs.

let entries = Object.entries(person);
console.log(entries); // [['name', 'John Doe'], ['age', 35], ['address', {street: '123 Main St', city: 'New York', zip: '10001'}], ['hobbies', ['reading', 'traveling', 'music']], ['email', '


//?/ Object Destructuring:
//?/ Object destructuring is a way to extract properties from an object and assign them to variables.

let { name, age, address } = person;
console.log(age); // 35


//?/ Object Spread Operator:
//?/ The object spread operator (...) is used to create a shallow copy of an object.

let personCopy = { ...person };
console.log(personCopy); // {name: 'John Doe', age: 35, address: {street: '123 Main St', city: 'New York', zip: '10001'}, hobbies: ['reading', 'traveling', 'music'], email: '


//?/ Object.assign(): is used to copy the values of all enumerable own properties from one or more source objects to a target object.

let personInfo = {
    name: 'Jane Doe',
    age: 25
};

let newPerson = Object.assign({}, person, personInfo);
console.log(newPerson); // {name: 'Jane Doe', age: 25, address: {street: '123 Main St', city: 'New York', zip: '10001'}, hobbies: ['reading', 'traveling', 'music'], email: '


//?/ Object.getOwnPropertyDescriptors(): is used to get all own property descriptors of an object.

let descriptors = Object.getOwnPropertyDescriptors(person);
console.log(descriptors); // {name: {value: 'John Doe', writable: true, enumerable: true, configurable: true}, age: {value: 35, writable: true, enumerable: true, configurable: true}, address: {value: {street: '123 Main St', city: 'New York', zip: '10001'}, writable: true, enumerable: true, configurable: true}, hobbies: {value: ['reading', 'traveling', 'music'], writable: true, enumerable: true, configurable: true}, email: {value: '


//?/ Object.create(): is used to create a new object with the specified prototype object and properties.

let personProto = {
    greet: function () {
        return `Hello, my name is ${this.name}`;
    }
};

let newPersonObj = Object.create(personProto);
newPersonObj.name = 'Alice';
console.log(newPersonObj.greet()); // Hello, my name is Alice


//?/ Object.setPrototypeOf(): is used to set the prototype (i.e., the internal [[Prototype]] property) of an object.

Object.setPrototypeOf(newPersonObj, person);
console.log(newPersonObj.name); // Alice
console.log(newPersonObj.age); // 35
console.log(newPersonObj.address); // {street: '123 Main St', city: 'New York', zip: '10001'}
console.log(newPersonObj.hobbies); // ['reading', 'traveling', 'music']
console.log(newPersonObj.email); // john.doe@gmail.com


//?/ Object.freeze(): is used to prevent the modification of an object.

Object.freeze(person);
person.age = 40; // TypeError: Cannot assign to read only property 'age' of object


//?/ Object.seal(): is used to prevent the addition or deletion of properties from an object.

Object.seal(person);


//?/ Object.isFrozen(): is used to check if an object is frozen.

console.log(Object.isFrozen(person)); // true


//?/ Object.isSealed(): is used to check if an object is sealed.

console.log(Object.isSealed(person)); // true


//?/ Object.isExtensible(): is used to check if new properties can be added to an object.

console.log(Object.isExtensible(person)); // false


//?/ Object.getOwnPropertyNames(): is used to get all own property names of an object.

let propertyNames = Object.getOwnPropertyNames(person);
console.log(propertyNames); // ['name', 'age', 'address', 'hobbies', 'email']


//?/ Object.getPrototypeOf(): is used to get the prototype (i.e., the internal [[Prototype]] property) of an object.

let personPrototype = Object.getPrototypeOf(newPersonObj);
console.log(personPrototype); // {name: 'John Doe', age: 35, address: {street: '123 Main St', city: 'New York', zip: '10001'}, hobbies: ['reading', 'traveling', 'music'], email: '



//?/ iterating over objects:

//?/ for...in loop: iterates over the enumerable properties of an object.

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

//?/ Output: 
//?/ name: John Doe
//?/ age: 35
//?/ address: [object Object]
//?/ hobbies: reading,traveling,music








