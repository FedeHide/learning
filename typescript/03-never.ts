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