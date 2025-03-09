//? interface: are used to define the structure of an object or a class.


//* 1. Interface for Object
interface Elf {
    name: string;
    weapon: string;
    health: number;
    mana?: number;
}

const legolas: Elf = {
    name: 'Legolas',
    weapon: 'Bow',
    health: 100,
    mana: 50
}


//* 2. Interface for Class
interface Tree {
    type: string;
    height: number;
    age: number;
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
}