// unknown nos obliga a castear el tipo de dato
let myVar: unknown = "Hello";
console.log((myVar as string).toUpperCase()); // castear = as


// other way to cast
let myVar2: unknown = [1, 2, 3];
console.log((<number[]>myVar2).length); // castear = <number[]> 


let colors = ["red", "green", "blue"] as const; // as const = readonly


function obtainConfig() {
    return {
        mode: "development",
        version: "1.0.0",
        options: {
            debug: false,
        }
    } as const;
}

const config = obtainConfig();
// config.mode = "production"; // Error
// config.options.debug = true; // Error



//* we can use readonly to make a single property readonly too

function obtainConfig2() {
    return {
        mode: "development" as const,
        version: "1.0.0",
        options: {
            debug: false,
        }
    }
}

//* functional overloading: we can define multiple function signatures and a single implementation

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number | string, b: number | string): number | string {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    } else {
        return `${a}${b}`;
    }
}

console.log("Functional Overloading:", add(1, 2)); // 3
console.log("Functional Overloading:", add("Hello", "World")); // HelloWorld

//! if the first two functions are not defined, the type checker will throw an error when calling the function with a string and a number

// other example of functional overloading

interface Person {
    name: string;
    greet(x: string): string;
}

interface Dog {
    breed: string;
    greet(x: number): number;
}


function stringOrNumber(x: Person): string;
function stringOrNumber(x: Dog): number;

function stringOrNumber(x: Person | Dog): string | number {
    if ("name" in x) {
        return x.greet("Hello");
    }

    if ("breed" in x) {
        return x.greet(42);
    }

    return x;
}

console.log("Functional Overloading 2:", stringOrNumber({ name: "John", greet: (x) => x })); // Hello
console.log("Functional Overloading 2:", stringOrNumber({ breed: "Husky", greet: (x) => x }));



//* using enums to create a type

enum Keys {
    name = "name",
    age = "age",
    city = "city",
}

type PersonType = {
    [key in Keys]: string;
}


//* create a type that depends of a property for the function´s result

type DependentType<T extends { kind: string }> = T["kind"]

type IndependentType = {
    kind: string;
    value: number;
}

const dependant: DependentType<IndependentType> = "1";


//* combine enums and mapped types

enum Numbers1 {
    one = 1,
    two = 2,
    three = 3,
}

enum Numbers2 {
    four = 4,
    five = 5,
    six = 6,
}

const myNumbers = {
    ...Numbers1,
    ...Numbers2,
} as const;

const mixedValues = Object.values(myNumbers);
type mixedNumbers = (typeof mixedValues)[number]

type Enums = {
    [key in mixedNumbers]: any
}
