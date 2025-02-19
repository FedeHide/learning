//?/ Classes: are a blueprint for creating objects with pre-defined properties and methods.


//*/ Class Declaration: defines a named class.
console.log("\n", "1. Class Declaration");

class User {
    type = 'User'; // Property: defines a property for the class.
    #bankAccount = '123456'; // Private Property: defines a private property for the class.

    constructor(name, age, bankAccount) { // Constructor: method for creating and initializing an object created with a class.
        this.name = name; // this: refers to the current object.
        this.age = age;
        this.#bankAccount = bankAccount; // Private Property: assigns a value to a private property.
    }

    //*/ getters and setters: are used to get and set the values of an object's properties.
    get bankAccount() { // Getter: defines a getter for the class.
        return this.#bankAccount;
    }

    set bankAccount(value) { // Setter: defines a setter for the class.
        this.#bankAccount = value;
    }

    //*/ Methods: are functions that are defined within a class.

    obtainInformation() { // Method: defines a method for the class.
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }

    work() { // Method: defines a method for the class.
        console.log(`${this.name} is working.`);
    }
}

class Admin extends User { // Inheritance: creates a class based on another class.
    static register = 'Admin'; // Static Property: defines a property that belongs to the class itself.

    constructor(name, age, role) {
        super(name, age); // super: calls the parent class constructor.
        this.role = role;
    }

    deletePost(id) { // Method: defines a method for the class.
        if (this.role.includes('delete')) { // includes(): determines whether an array includes a certain value among its entries.
            console.log(`Post ${id} has been deleted.`);
        }
    }

    work() { // Method: defines a method for the class.
        super.work(); // super: calls the parent class method.
        console.log(`${this.name} is an admin.`);
    }

    static deleteUser(id) { // Static Method: defines a method that belongs to the class itself.
        console.log(`User ${id} has been deleted.`); 
    }
}

const user = new User('John', 30); // new: creates an instance of a class.
const admin = new Admin('Jane', 25, ['delete']); // new: creates an instance of a class

user.obtainInformation(); // Output: Name: John, Age: 30
user.work(); // Output: John is working.
console.log("User Type:", user.type); // Output: User
console.log("Admin Register:", Admin.register); // Output: Admin
admin.deletePost(5); // Output: Post 5 has been deleted.
Admin.deleteUser(1); // Output: User 1 has been deleted.
admin.work(); // Output: Jane is working. Jane is an admin.

const user2 = new User('John', 30, '654321'); // new: creates an instance of a class.
console.log("get Bank Account:", user2.bankAccount); // Output: Bank Account: 654321 //! it only works with the getter.

// change the value of the private property with setter.
user2.bankAccount = '123456'; //! this only works with the setter.
console.log("set Bank Account:", user2.bankAccount); // Output: Bank Account: 123456 
