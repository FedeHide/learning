//?/ This: It is a special keyword that refers to the object that is currently being executed.

/*
	📌 Outside of any block, it represents the global object (window)
*/
console.log(this);

/*
	📌 Inside an arrow function, it represents the global object.
*/
const myFunction = () => {
	console.log(this);
};
myFunction();

/*
	📌 In an event, it refers to the element that received the event
	
	Note: Only when the function is not an arrow function
	If it is an arrow function, it will refer to the global object.
*/
document.getElementById('button1').addEventListener('click', () => {
console.log(this);
});

/*
	📌 In a method, it represents the object
*/
class User {
	constructor(name) {
		this.name = name;
		console.log(this);
	}

	myMethod() {
		console.log(this);
	}
}

const newUser = new User('Carlos');
newUser.myMethod();
