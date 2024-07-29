//?/ Set: is a collection of unique values. A set can be created using the Set constructor. 
// The Set object lets you store unique values of any type, whether primitive values or object references.

//*/ Set Properties
let a = new Set();
console.log(a); // Set {}

//*/ Set Methods
let b = new Set([1, 2, 3, 4, 5]);
console.log(b); // Set { 1, 2, 3, 4, 5 }

// add(): adds a new element with a specified value to the end of a Set object.
b.add(6);
console.log(b); // Set { 1, 2, 3, 4, 5, 6 }

// clear(): removes all elements from a Set object.
b.clear();
console.log(b); // Set {}

// delete(): removes the specified element from a Set object.
b.add(1);
b.add(2);
b.add(3);
b.delete(2);
console.log(b); // Set { 1, 3 }

// has(): returns a boolean asserting whether an element is present with the given value in a Set object or not.
console.log(b.has(1)); // true
console.log(b.has(2)); // false

// size: returns the number of elements in a Set object.
console.log(b.size); // 2

// forEach(): executes a provided function once for each value in the Set object, in insertion order.
b.forEach((value) => {
    console.log(value);
});
