//?/ Set: is a collection of unique and ordered elements.
// The Set object lets you store unique values of any type, whether primitive values or object references.
// Sets are not indexed-based - you do not refer to items in a set based on their position in the set.


//*/ Set Literals
let literalSet = new Set([1, 2, 3, 4, 5]);
console.log("set literal:", literalSet); // Set { 1, 2, 3, 4, 5 }

//*/ Set Constructor
let constructorSet = new Set();
constructorSet.add(1);
constructorSet.add(2);
constructorSet.add(3);
constructorSet.add(4);
constructorSet.add(5);
console.log("set constructor:", constructorSet); // Set { 1, 2, 3, 4, 5 }


//*/ Set Properties
console.log("\n", "Set Properties");
let set1 = new Set([1, 2, 3, 4, 5]);

// size: returns the number of elements in a Set object.
console.log("size:", set1.size); // 5


//*/ Accessing Set Elements
console.log("\n", "Accessing Set Elements");
let set2 = new Set([1, 2, 3, 4, 5]);

// values(): returns a new Iterator object that contains the values for each element in a Set object in insertion order.
console.log("first element:", set2.values().next().value); // 1

// Access the Last Element of a Set
console.log("last element:", [...set2][set2.size - 1]); // 5


//*/ Modifying Set Elements
console.log("\n", "Modifying Set Elements");
let set3 = new Set([1, 2, 3, 4, 5]);

// add(): appends a new element with a specified value to the end of a Set object.
set3.add(6);
console.log("add(6):", set3); // Set { 1, 2, 3, 4, 5, 6 }

// delete(): removes the specified element from a Set object.
set3.delete(2);
console.log("delete(2):", set3); // Set { 1, 3, 4, 5, 6 }


//*/ Set Methods
console.log("\n", "Set Methods");
let set4 = new Set(["JavaScript", "TypeScript", "Python", 2, 3, 4]);

// has(): returns a boolean indicating whether an element with the specified value exists in a Set object or not.
console.log("has():", set4.has("JavaScript")); // true

// entries(): returns a new Iterator object that contains an array of [value, value] for each element in a Set object, in insertion order.
console.log("entries():", set4.entries().next().value); // [ 'JavaScript', 'JavaScript' ]

// forEach(): executes a provided function once for each value in a Set object, in insertion order.
set4.forEach((value) => {
    console.log("forEach():", value);
});

// keys(): returns a new Iterator object that contains the values for each element in a Set object in insertion order.
console.log("keys():", set4.keys().next().value); // JavaScript

// values(): returns a new Iterator object that contains the values for each element in a Set object in insertion order.
console.log("values():", set4.values().next().value); // JavaScript

// clear(): removes all elements from a Set object.
set4.clear();
console.log("clear():", set4); // Set {}

//! next(): returns an object with two properties done and value.


//*/ Set Operations
console.log("\n", "Set Operations");

let set7 = new Set([1, 2, 3, 4, 5]);
let set8 = new Set([4, 5, 6, 7, 8]);

// Union
let union = new Set([...set7, ...set8]);
console.log("union:", union); // Set { 1, 2, 3, 4, 5, 6, 7, 8 }

// Intersection
let intersection = new Set([...set7].filter((x) => set8.has(x)));
console.log("intersection:", intersection); // Set { 4, 5 }

// Difference
let difference = new Set([...set7].filter((x) => !set8.has(x)));
console.log("difference:", difference); // Set { 1, 2, 3 }



//*/ Convert Set to Array
console.log("\n", "Convert Set to Array");

let set5 = new Set(["JavaScript", "TypeScript", "Python"]);
let array3 = [...set5];
console.log("set to array:", array3); // [ 'JavaScript', 'TypeScript', 'Python' ]



//*/ Convert Array to Set
console.log("\n", "Convert Array to Set");

let array4 = ["JavaScript", "TypeScript", "Python"];
let set6 = new Set(array4);
console.log("array to set:", set6); // Set { 'JavaScript', 'TypeScript', 'Python' }
