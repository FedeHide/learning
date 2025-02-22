//?/ Prototype: is a property of a function that points to an object. It is used to add new properties to the object constructor.


//*/ 1. Creating a Prototype from a native object as String, Number, Array, etc.
console.log("\n", "Creating a Prototype");


//*/ 1.1. Creating a prototype for the String object.
String.prototype.reverse = function() {
    return this.split('').reverse().join('');
}

const string = 'Hello World!';
console.log("reverse: ", string.reverse());


//*/ 1.2. Creating a prototype for the Number object.
Number.prototype.isPositive = function() {
    if(this > 0) {
        return true;
    } else {
        return false;
    }
}

const number = 5;
console.log("isPositive: ", number.isPositive());


//*/ 1.3. Creating a prototype for the Array object.
Array.prototype.firstElement = function() {
    return this[0];
}

const array = [1, 2, 3, 4, 5];
console.log("firstElement: ", array.firstElement())
