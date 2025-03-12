//? Type Narrowing: is the process of refining the type of a variable within a conditional block based on a type guard.
//? Type Guard: is some expression that performs a runtime check that guarantees the type in some scope.
//? Type Assertion: is a way to tell the compiler that you know more about the type of a value than it does.

//* example with typeof
// define a union type
type UnionType = string | number;

function exampleFunction(value: UnionType): void {
    // type guard using typeof
    if (typeof value === 'string') {
        // within this block, typescript knows that value is a string
        console.log(value.toUpperCase());
    } else {
        // within this block, typescript knows that value is a number
        console.log(value.toFixed(2));
    }
}


//* example with instance of
class Wolf {
    howl(): void {
        console.log('awooooooooo');
    }
}

class Tiger {
    growl(): void {
        console.log('grrrrrrr');
    }
}

function animalSound(animal: Wolf | Tiger): void {
    if (animal instanceof Wolf) {
        // within this block, typescript knows that animal is a Wolf
        animal.howl();
    } else {
        // within this block, typescript knows that animal is a Tiger
        animal.growl();
    }
}


//* example with in
interface Fish {
    swim(): void;
}

interface Bird {
    fly(): void;
}

function move(animal: Fish | Bird): void {
    if ('swim' in animal) {
        // within this block, typescript knows that animal is a Fish
        animal.swim();
    } else {
        // within this block, typescript knows that animal is a Bird
        animal.fly();
    }
}


//* example with custom type guard
// define a custom type guard
function isFish(animal: Fish | Bird): animal is Fish {
    return 'swim' in animal;
}

function move2(animal: Fish | Bird): void {
    if (isFish(animal)) {
        // within this block, typescript knows that animal is a Fish
        animal.swim();
    } else {
        // within this block, typescript knows that animal is a Bird
        animal.fly();
    }
}


//* example with type assertion
// define a union type
type UnionType2 = string | number;


function exampleFunction2(value: UnionType2): void {
    // type assertion using 'as'
    if ((value as string).toUpperCase) {
        // within this block, typescript knows that value is a string
        console.log((value as string).toUpperCase());
    } else {
        // within this block, typescript knows that value is a number
        console.log((value as number).toFixed(2));
    }
}


//* example with intersection type
type Employee2 = {
    id: number;
    name: string;
}

type Manager2 = {
    department: string;
    role: string;
}

// create a intersection type
type ManagementEmployee = Employee2 & Manager2;

const manager: ManagementEmployee = {
    id: 1,
    name: 'John Doe',
    department: 'HR',
    role: 'Manager'
}