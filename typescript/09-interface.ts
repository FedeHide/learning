//? interface: are used to define the structure of an object, class, or function.


//* 1. Interface for Object
interface Elf {
    name: string;
    weapons: string[];
    readonly health: number;
    mana?: number;
    parents?: {name: string; surname: string}[];
}

const legolas: Elf = {
    name: 'Legolas',
    weapons: ['Bow', 'Dagger'],
    health: 100,
    mana: 50,
    parents: [{name: 'Thranduil', surname: 'Greenleaf'}]
}


//* 2. Interface for Class
interface Tree {
    type: string;
    height: number;
    age: number;
    grow(): void;
    photosynthesis?(sunlight: number): void;
}

class OakTree implements Tree {
    type: string;
    height: number;
    age: number;

    constructor(type: string, height: number, age: number) {
        this.type = type;
        this.height = height;
        this.age = age;
    }

    grow(): void {
        this.height += 10;
        this.age += 1;
    }

    photosynthesis(sunlight: number): void {
        this.height += sunlight / 10;
    }
}


//* 3. Interface for Function
interface MathOperation {
    (a: number, b: number): number;
}

const add: MathOperation = (a, b) => a + b;
const subtract: MathOperation = (a, b) => a - b;


//* 4. Extending Interface
interface MovieDetails {
    readonly title: string;
    rating: number;
    printMovieInfo(name: string, genre: string, rating: number): string | number;
}

interface MovieGenre extends MovieDetails {
    readonly genre: string;
}

const movie: MovieGenre = {
    title: 'The Lord of the Rings',
    rating: 8.9,
    genre: 'Fantasy',
    printMovieInfo(name: string, genre: string, rating: number): string {
        return `Name: ${name}, Genre: ${genre}, Rating: ${rating}`;
    }
}


//* 5. Interface for Array
interface NumberArray {
    [index: number]: number;
}

const numbers: NumberArray = [1, 2, 3, 4, 5];


//* 6. Interface for Dictionary
interface Dictionary {
    [key: string]: string;
}

const dictionary: Dictionary = {
    name: 'John',
    age: '25',
    city: 'New York'
}


//* 7. Declaration Merging
interface Turtle {
    name: string;
    age: number;
}

interface Turtle {
    species: string;
    eat(food: string): void;
}

const turtle: Turtle = {
    name: 'Leonardo',
    age: 15,
    species: 'Red-eared slider',
    eat(food: string): void {
        console.log(`Eating ${food}`);
    }
}
