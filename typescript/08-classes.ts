//? Class properties annotations in TypeScript

class Person {
    name: string; //! public property: accessible from outside the class, default access modifier is public
    public age: number; //! public property: accessible from outside the class, that public is not necessary
    static isHuman = true; //! static property: can be accessed without creating an instance of the class
    private type: string; //! private property: only accessible within the class
    protected job: string; //! protected property: accessible within the class and its subclasses
    readonly id: number; //! readonly property: can't be changed after initialization


    constructor(name: string, age: number, job: string, type: string, id: number) {
        this.name = name;
        this.age = age;
        this.job = job;
        this.type = type;
        this.id = id;
    }

    // setters and getters
    setType(type: string) {
        this.type = type;
    }

    getType() {
        return this.type;
    }

    // public method: accessible from outside the class
    printAge() {
        console.log("Age: ", this.age);
    }

    // private method: only accessible within the class
    private printType() {
        console.log(this.type);
    }

    // protected method: accessible within the class and its subclasses
    protected printJob() {
        console.log(this.job);
    }

    // static method: can be called without creating an instance of the class
    static checkIsHuman() {
        return Person.isHuman;
    }
}


const person = new Person('John', 30, 'Developer', 'human', 1);
console.log("person: ", person);
person.printAge();
person.setType("alien");
console.log("new type: ", person.getType());
// person.printType(); //! ERROR: private method
// person.printJob(); //! ERROR: protected method
console.log("isHuman: ", Person.checkIsHuman());
// person.isHuman; //! ERROR: can't access static property using instance of the class
// person.isHuman = false; //! ERROR: can't change static property using instance of the class
// person.id = 2; //! ERROR: can't change readonly property


class Employee extends Person {
    constructor(name: string, age: number, job: string, type: string, id: number) {
        super(name, age, job, type, id);
    }

    printEmployeeJob() {
        // this.printType(); //! ERROR: private method only accessible within the parent class
        // console.log(this.type) //! ERROR: private property only accessible within the parent class
        this.printJob(); //! protected method inherited from the parent class
    }
}


const employee = new Employee('Jane', 25, 'Designer', 'human', 2);
console.log("employee: ", employee);
employee.printEmployeeJob();