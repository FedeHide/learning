//?/ Spread and Rest Operator: 

//*/ Spread Operator: is used to split up array elements or object properties.
console.log("Spread Operator");

// 1. Spread Operator with Arrays:
console.log("\n", "Spread Operator with Arrays");

const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
console.log("newNumbers: ", newNumbers); // [1, 2, 3, 4, 5]

// 2. Spread Operator with Objects:
console.log("\n", "Spread Operator with Objects");

const person = {
    name: 'John'
};

const newPerson = {
    ...person,
    age: 30
};

console.log("newPerson: ", newPerson); // {name: 'John', age: 30}


//*/ Rest Operator: is used to merge a list of function arguments into an array.
console.log("\n", "Rest Operator");

// 1. Rest Operator with Functions:
console.log("\n", "Rest Operator with Functions");

const filter = (...args) => {
    return args.filter(el => el === 1);
};

console.log("filter(1, 2, 3): ", filter(1, 2, 3)); // [1]


// 2. Rest Operator with Destructuring:
console.log("\n", "Rest Operator with Destructuring");

const numbers2 = [1, 2, 3];
const [num1, ...num2] = numbers2;
console.log("num1: ", num1); // 1
console.log("num2: ", num2); // [2, 3]


// 3. Rest Operator with Objects:
console.log("\n", "Rest Operator with Objects");

const { name, ...rest } = { name: 'John', age: 30, city: 'New York' };
console.log("name: ", name); // John
console.log("rest: ", rest); // {age: 30, city: 'New York'}

