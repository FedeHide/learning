//? Type Alias: is a way to give a type a name by defining a name for that type. 

type Uid = number | string; //! define a type alias for number or string
type Platform = 'Windows' | 'Linux' | 'Mac OS'; //! define a type alias for string literals
type myString = string; //! define a type alias for string


// example

type User = {
    id: Uid;
    name: string;
    age: number;
    platform: Platform;
}

function logUserDetails(user: User) {
    console.log(`User ${user.id} is ${user.name} and ${user.age} years old and uses ${user.platform}`);
}

logUserDetails({ id: 1, name: 'John', age: 25, platform: 'Windows' });


//! Use type aliases when defining unions, tuples, or more complex types.

// - extensibility with & and | operators
// - has NO declaration merging
// - can be used with function and tuples
// - HAS union and intersection types



//* extensible with & and | operators
type Car = {
    make: string;
    model: string;
    year?: number; //! optional property
}

type Motorcycle = {
    make: string;
    model: string;
    year: number;
}

type Vehicle = Car | Motorcycle; //! union type
type Vehicle2 = Car & Motorcycle; //! intersection type


//* function and tuples
type Point = [number, number]; // tuple type
type Point3D = [number, number, number]; // tuple type

type Distance = (from: Point, to: Point) => number; // function type

const distance: Distance = (from, to) => {
    return Math.sqrt(Math.pow(to[0] - from[0], 2) + Math.pow(to[1] - from[1], 2));
}


//! Type Aliases vs Interfaces
// - Type aliases are more flexible than interfaces
// - Interfaces are better for defining object shapes
// - Use type aliases when you need a union or intersection type
// - Use interfaces when you need to extend or implement a class
