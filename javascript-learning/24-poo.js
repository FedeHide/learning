//?/ POO: Object Oriented Programming is a programming paradigm that uses objects and classes in programming. 
//?/ It aims to implement real-world entities like inheritance, hiding, polymorphism, etc in programming. 
//?/ The main aim of OOP is to bind together the data and the functions that operate on them so that no other part of the code can access this data except that function.
//?/ The four principles of OOP are:


//?/ 1. Encapsulation: refers to the bundling of data with the methods that operate on that data.
// Encapsulation is the technique of making the fields in a class private and providing access to the fields via public methods.
// It is used to restrict access to the inner workings of a class and to protect the integrity of the data.
// Encapsulation is also known as data hiding.
// Encapsulation can be achieved by using access specifiers such as private, protected, and public.
// Encapsulation helps in achieving data hiding, abstraction, and modularity.

// Encapsulation Example:

class User {
    #type = 'User'; // Private Property: defines a private property for the class.

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    obtainInformation() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }

    getType() {
        return this.#type;
    }
}

const user = new User('John', 30);
console.log(user.getType()); // Output: User


//?/ 2. Abstraction: refers to the concept of hiding the complex implementation details and showing only the necessary features of the object.
// Abstraction is the process of hiding the complex implementation details and showing only the necessary features of an object.
// It helps in reducing programming complexity and effort.
// Abstraction can be achieved by using abstract classes and interfaces.
// Abstraction helps in achieving data hiding, encapsulation, and modularity.

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


//?/ 3. Inheritance: refers to the mechanism by which an object acquires the properties of another object.
// Inheritance is the mechanism by which one class acquires the properties and behavior of another class.
// It allows a class to inherit the properties and methods of another class.
// Inheritance helps in code reusability and extensibility.
// Inheritance can be achieved by using the extends keyword in JavaScript.
// Inheritance helps in achieving data hiding, encapsulation, and polymorphism.

// Inheritance Example:

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

class Cat extends Animal {
    speak() {
        console.log(`${this.name} meows.`);
    }
}

const dog = new Dog('Buddy');
dog.speak(); // Output: Buddy barks.

const cat = new Cat('Whiskers');
cat.speak(); // Output: Whiskers meows.



//?/ 4. Polymorphism: refers to the ability to present the same interface for different data types.
// Polymorphism is the ability of an object to take on multiple forms.
// It allows objects of different classes to be treated as objects of a common superclass.
// Polymorphism helps in code reusability and extensibility.
// Polymorphism can be achieved by using method overriding in JavaScript.
// Polymorphism helps in achieving data hiding, encapsulation, and inheritance.

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
