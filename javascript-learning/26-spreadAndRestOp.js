//?/ Spread and Rest Operator: 

// Spread Operator: is used to split up array elements or object properties.

// 1. Spread Operator with Arrays:
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
console.log(newNumbers); // Output: [1, 2, 3, 4, 5]

// 2. Spread Operator with Objects:
const person = {
    name: 'John'
};

const newPerson = {
    ...person,
    age: 30
};

console.log(newPerson); // Output: { name: 'John', age: 30 }


// Rest Operator: is used to merge a list of function arguments into an array.

// 1. Rest Operator with Functions:
const filter = (...args) => {
    return args.filter(el => el === 1);
};

console.log(filter(1, 2, 3)); // Output: [1]

// 2. Rest Operator with Destructuring:
const numbers2 = [1, 2, 3];
const [num1, ...num2] = numbers2;
console.log(num1, num2); // Output: 1 [2, 3]

// 3. Rest Operator with Objects:
const { name, ...rest } = { name: 'John', age: 30, city: 'New York' };
console.log(name); // Output: John
console.log(rest); // Output: { age: 30, city: 'New York' }

