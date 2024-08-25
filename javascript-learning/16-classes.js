//?/ Classes: are a blueprint for creating objects with pre-defined properties and methods.

//*/ 1. Class Declaration: defines a named class.
class User {
    type = 'User'; // Property: defines a property for the class.

    constructor(name, age) { // Constructor: method for creating and initializing an object created with a class.
        this.name = name; // this: refers to the current object.
        this.age = age;
    }

    obtainInformation() { // Method: defines a method for the class.
        console.log(`Name: ${this.name}, Age: ${this.age}`);
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

    static deleteUser(id) { // Static Method: defines a method that belongs to the class itself.
        console.log(`User ${id} has been deleted.`); 
    }
}

const user = new User('John', 30); // new: creates an instance of a class.
const admin = new Admin('Jane', 25, ['delete']);

user.obtainInformation(); // Output: Name: John, Age: 30
admin.deletePost(5); // Output: Post 5 has been deleted.
Admin.deleteUser(1); // Output: User 1 has been deleted.

