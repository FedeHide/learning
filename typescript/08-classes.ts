//? Class properties annotations in TypeScript

class Person {
    name: string; //! public property: accessible from outside the class, default access modifier is public
    public age: number; //! public property: accessible from outside the class, that public is not necessary
    static isHuman = true; //! static property: can be accessed without creating an instance of the class
    private _type: string; //! private property: only accessible within the class. Conventionally, private properties are prefixed with an underscore
    protected job: string; //! protected property: accessible within the class and its subclasses
    readonly id: number; //! readonly property: can't be changed after initialization


    constructor(name: string, age: number, job: string, type: string, id: number) { // static properties can't be passed as arguments
        this.name = name;
        this.age = age;
        this.job = job;
        this._type = type;
        this.id = id;
    }

    // setters and getters
    setType(type: string): void {   
        this._type = type;
    }

    getType(): string {
        return this._type;
    }

    // public method: accessible from outside the class
    printAge(): void {
        console.log("Age: ", this.age);
    }

    // private method: only accessible within the class
    private printType(): void {
        console.log(this._type);
    }

    // protected method: accessible within the class and its subclasses
    protected printJob(): void {
        console.log("Job: ", this.job);
    }

    // static method: can be called without creating an instance of the class
    static checkIsHuman(): boolean {
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


class ProjectManager extends Person {
    hasExperience: boolean;

    constructor(name: string, age: number, job: string, type: string, id: number, hasExperience: boolean) {
        super(name, age, job, type, id);
        this.hasExperience = hasExperience;
    }

    printEmployeeJob(): void {
        // this.printType(); //! ERROR: private method only accessible within the parent class
        // console.log(this.type) //! ERROR: private property only accessible within the parent class
        this.printJob(); //! protected method inherited from the parent class
    }
}


const employee = new ProjectManager('Jane', 25, 'Designer', 'human', 2, true);
console.log("employee: ", employee);
employee.printEmployeeJob();
