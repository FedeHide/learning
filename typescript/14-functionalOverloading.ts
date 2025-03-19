//? functional overloading: we can define multiple function signatures and a single implementation

function add2(a: number, b: number): number;
function add2(a: string, b: string): string;
function add2(a: number | string, b: number | string): number | string {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    } else {
        return `${a}${b}`;
    }
}

console.log("Functional Overloading:", add2(1, 2)); // 3
console.log("Functional Overloading:", add2("Hello", "World")); // HelloWorld

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