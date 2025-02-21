//?/ POO: Object Oriented Programming is a programming paradigm that uses objects and classes in programming. 
//?/ The main aim of OOP is to bind together the data and the functions that operate on them so that no other part of the code can access this data except that function.



//?/ The four principles of OOP are:

//*/ 1. Encapsulation: refers to the bundling of data with the methods that operate on that data.
// Encapsulation is the technique of making the fields in a class private and providing access to the fields via public methods.
// It is used to restrict access to the inner workings of a class and to protect the integrity of the data.
// Encapsulation can be achieved by using access specifiers such as private, protected, and public.
console.log("\n", "Encapsulation:", "\n");

// Encapsulation Example:

class Pet {
    // private properties: can only be accessed within the class
    #energy
    #hunger

    constructor(name, species) {
        this.name = name;
        this.species = species;
        this.#energy = 100;
        this.#hunger = 10;
    }

    //! we need to create getters and setters to access the private properties

    // getters: to access the private properties
    get energy() {
        return this.#energy;
    }

    get hunger() {
        return this.#hunger;
    }

    // setters: to modify the private properties
    set energy(value) {
        if (value < 0) {
            this.#energy = 0;
        } else if (value > 100) {
            this.#energy = 100;
        } 
        else {
            this.#energy = value;
        }
    }

    set hunger(value) {
        if (value < 0) {
            this.#hunger = 0;
        } else if (value > 100) {
            this.#hunger = 100;
        }
        else {
            this.#hunger = value;
        }
    }

    // methods
    play() {
        if (this.#energy > 10 && this.#hunger < 100) {
            this.#energy -= 10;
            this.#hunger += 5;
            console.log(`${this.name} is playing.`);
        } else {
            console.log(`${this.name} is too tired or too hungry to play.`);
        }
    }

    feed() {
        if (this.#hunger > 10) {
            this.#hunger -= 10;
            console.log(`${this.name} is eating.`);
        } else {
            console.log(`${this.name} is not hungry.`);
        }
    }

    sleep() {
        if (this.#energy <= 90) {
            this.#energy += 10;
            console.log(`${this.name} is sleeping.`);
        } else {
            console.log(`${this.name} is not tired.`);
        }
    }

    obtainInformation() {
        console.log(`Name: ${this.name}, Species: ${this.species}`);
        console.log(`Energy: ${this.#energy}, Hunger: ${this.#hunger}`);
    }
}

const purris = new Pet('Purris', 'Cat');
console.log("get energy:", purris.energy);
console.log("get hunger:", purris.hunger);
console.log("set energy:", purris.energy = -50);
console.log("set hunger:", purris.hunger += 30);
console.log("get new energy:", purris.energy);
console.log("get new hunger:", purris.hunger);
purris.play(); // Output: Purris is playing.
purris.feed(); // Output: Purris is eating.
purris.sleep(); // Output: Purris is sleeping.
purris.obtainInformation(); // Output: Name: Purris, Species: Cat



//*/ 2. Abstraction: refers to the concept of hiding the complex implementation details and showing only the necessary features of the object.
// Abstraction can be achieved by using abstract classes and interfaces.
// Abstraction helps in achieving data hiding, encapsulation, and modularity.
console.log("\n", "Abstraction:", "\n");

// Abstraction Example:

class Shape {
    constructor() {
        if (new.target === Shape) {
            throw new Error('Shape class cannot be instantiated.');
        }
    }

    draw() {
        throw new Error('Method draw() must be implemented.');
    }
}

class Circle extends Shape {
    draw() {
        console.log('Drawing Circle...');
    }
}

class Rectangle extends Shape {
    draw() {
        console.log('Drawing Rectangle...');
    }
}

const circle = new Circle();
circle.draw(); // Output: Drawing Circle...

const rectangle = new Rectangle();
rectangle.draw(); // Output: Drawing Rectangle...


//*/ 3. Inheritance: refers to the mechanism by which one class acquires the properties and behavior of another class.
// It allows a class to inherit the properties and methods of another class.
// Inheritance helps in code reusability and extensibility.
console.log("\n", "Inheritance:", "\n");

// Inheritance Example:

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log(`${this.name} is eating.`);
    }

    sleep() {
        console.log(`${this.name} is sleeping.`);
    }
}

class Mammal extends Animal {
    constructor(name, age, furColor) {
        //! super() is used to call the constructor of the parent class.
        super(name, age);
        this.furColor = furColor;
    }

    makeSound() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Mammal {
    constructor(name, age, furColor, breed) {
        super(name, age, furColor);
        this.breed = breed;
    }

    bark() {
        console.log(`${this.name} barks.`);
    }
}

class Bird extends Animal {
    constructor(name, age, wingSpan) {
        super(name, age);
        this.wingSpan = wingSpan;
    }

    fly() {
        console.log(`${this.name} is flying.`);
    }
}

class Eagle extends Bird {
    constructor(name, age, wingSpan, species) {
        super(name, age, wingSpan);
        this.species = species;
    }

    hunt() {
        console.log(`${this.name} is hunting.`);
    }
}

// Create instances of the classes
const dog = new Dog('Buddy', 5, 'Brown', 'Golden Retriever');
dog.eat(); // Output: Buddy is eating.
dog.bark(); // Output: Buddy barks.
console.log(`${dog.name} is a ${dog.breed} with ${dog.furColor} fur.`); // Output: Buddy is a Golden Retriever with Brown fur.

const eagle = new Eagle('Hawk', 3, 2, 'Golden Eagle');
eagle.sleep(); // Output: Hawk is sleeping.
eagle.fly(); // Output: Hawk is flying.
eagle.hunt(); // Output: Hawk is hunting.
console.log(`${eagle.name} is a ${eagle.species} with a wingspan of ${eagle.wingSpan} meters.`); // Output: Hawk is a Golden Eagle with a wingspan of 2 meters.


//*/ 4. Polymorphism: refers to the ability to present the same interface for different data types.
// It allows objects of different classes to be treated as objects of a common superclass.
console.log("\n", "Polymorphism:", "\n");

// Polymorphism Example:

class dinner {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(`${this.name} is eating.`);
    }
}

class pizza extends dinner {
    eat() {
        console.log(`${this.name} is eating pizza.`);
    }
}

class pasta extends dinner {
    eat() {
        console.log(`${this.name} is eating pasta.`);
    }
}

const pizza1 = new pizza('John');
pizza1.eat(); // Output: John is eating pizza.

const pasta1 = new pasta('Jane');
pasta1.eat(); // Output: Jane is eating pasta.



//! other programming paradigms:
//*/ 1. Imperative: uses statements that change a program. It focuses on describing how a program operates.
//*/ 2. Declarative: expresses the logic of a computation without describing its control flow.
//*/ 3. Functional: treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data.
//*/ 4. logical: uses logical inference to solve problems.