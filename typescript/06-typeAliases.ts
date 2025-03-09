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

function logUserDetails(user: User): void {
    console.log(`User ${user.id} is ${user.name} and ${user.age} years old and uses ${user.platform}`);
}

logUserDetails({ id: 1, name: 'John', age: 25, platform: 'Windows' });


//! Use type aliases when defining unions, tuples, or more complex types.

// - extensibility with & and | operators
// - has NO declaration merging
// - can be used with function and tuples
// - HAS union and intersection types



//* extensible with & and | operators
type Character = {
    name: string;
    health: number;
    mana?: number; //! optional property (if not provided, it will be undefined)
}

type Warrior = {
    weapon: string;
    strength: number;
}

type Mage = {
    spells: string[];
    intelligence: number;
}

type Paladin = Character & Warrior; //! intersection type
type Wizard = Character & Mage; //! intersection type

type Hero = Paladin | Wizard; //! union type
type Villain = Wizard; 

const glorfindel: Paladin = {
    name: 'glorfindel',
    health: 100,
    weapon: 'Sword',
    strength: 10
}

const merlin: Wizard = {
    name: 'Merlin',
    health: 80,
    spells: ['fireball', 'lightning bolt'],
    intelligence: 15,
}

const characters: (Hero | Villain)[] = [glorfindel, merlin];


//* function and tuples
type Point = [number, number]; // tuple type
type Point3D = [number, number, number]; // tuple type

type Distance = (from: Point, to: Point) => number; // function type

const distance: Distance = (from, to): number => {
    return Math.sqrt(Math.pow(to[0] - from[0], 2) + Math.pow(to[1] - from[1], 2));
}


//! Type Aliases vs Interfaces
// - Type aliases are more flexible than interfaces
// - Interfaces are better for defining object shapes
// - Use type aliases when you need a union or intersection type
// - Use interfaces when you need to extend or implement a class


//* discriminated properties
// A common technique for working with union types is to have a single field which uses literal types which is called a discriminant property.
// This is a property that tells the TypeScript compiler which type a variable is.

type UserInfo = {
    type: 'info'; //! discriminant property
    name: string;
    email: string;
    age: number;
};

type UserAccount = {
    type: 'account'; //! discriminant property
    id: number;
    account: string;
};

let user: UserInfo | UserAccount = {
    type: 'account',
    id: 1,
    account: 'john123',
    // name: 'John', //! Error: 'name' no existe en UserAccount
};


//! Why is it useful? example:

type Employee = {
    name: string;
    salary: number;
}

type Manager = {
    name: string;
    team: string;
}

let john: Employee | Manager = {
    name: 'John',
    salary: 50000,
    team: 'Development', 
}

//! if we don't have a discriminant property, we can create a variable with both properties, and this is not what we want.