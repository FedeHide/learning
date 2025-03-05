//? Any: in typescript, any is a special type that can be used to represent any value.
//! It is used to opt-out of type-checking and is not recommended to use.

let anyColor: any = "red";
anyColor = 12;
anyColor = true;
console.log(anyColor)

// in the above example, we can see that the variable anyColor can be assigned any type of value.