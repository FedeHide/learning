//? never: represents the type of values that never occur. For instance, never is the return type for a function expression that always throws an exception or one that never returns; Variables also acquire the type never when narrowed by any type guards that can never be true.
// is used for indicating that certain code paths should never be reached, or certain values are impossible.
// it can help catch errors at compile time instead of runtime.

//* When to use never:

// - when a function that always throws an error
function throwError(msg: string): never {
    throw new Error(msg);
}


// - when a function that has an infinite loop
function infiniteLoop(): never {
    while (true) {}
}


// - when a variable that can never be assigned a value
let x: never

function neverReturns(): never {
    while (true) {}
}

// x = neverReturns(); //! Error: Type 'void' is not assignable to type 'never'.



//? unknown: represents the type-safe counterpart of any, but with stricter type safety. It is used when you do not know the exact type of a value at compile time, and it forces you to perform type checks before using the value.


let unknownVar: unknown;

unknownVar = "Hello, World!";
unknownVar = 42;
unknownVar = true;

let str: string;
// str = unknownVar; //! Error: Type 'unknown' is not assignable to type 'string'.


// type assertion or check is needed
if (typeof unknownVar === "string") {
    str = unknownVar;
}


// we can cast an unknown value
let unknownVar2: unknown = "Hello";
console.log((unknownVar2 as string).toUpperCase()); // castear = as


// when to use unknown:
// - When working with external data sources (e.g., API responses).
// - When you want to provide a type-safe alternative to any.
// - When handling dynamic values in a type-safe manner.
// - When you want to enforce type checking before using a value.
