//? Annotations in TypeScript: are used to give a type to a variable, function, or class.

let myName: string = "John"; // String
// myName = 12; //! Error: Type '123' is not assignable to type 'string'.


let myAge: number = 25; // Number
// myAge = "25"; //! Error: Type '"25"' is not assignable to type 'number'.


let hasPet: boolean = true; // Boolean
// hasPet = 1; //! Error: Type '1' is not assignable to type 'boolean'.


let favoriteColors: string[] = ["red", "green", "blue"]; // Array of strings


let myInfo: [string, number] = ["John", 25]; // Tuple
// myInfo = [25, "John"]; //! Error: Type 'number' is not assignable to type 'string'. Type 'string' is not assignable to type 'number'.
// myInfo = ["John", 25, "New York"]; //! Error: Type '[string, number, string]' is not assignable to type '[string, number]'.



//* type inference: TypeScript can infer the type of a variable based on its value

let inferredString = "Hello"; // TypeScript infers the type to be string
let inferredNumber = 25; // TypeScript infers the type to be number
let inferredBoolean = true; // TypeScript infers the type to be boolean

// inferredString = false //! Error: Type 'false' is not assignable to type 'string'.
// inferredNumber = "25" //! Error: Type '"25"' is not assignable to type 'number'.
// inferredBoolean = 0 //! Error: Type '0' is not assignable to type 'boolean'.



//* function parameters and return types can also have annotations

// regular function
function addOne(num: number): number {
    return num + 1;
}


// arrow function
const multiply = (x: number, y: number): number => x * y;
