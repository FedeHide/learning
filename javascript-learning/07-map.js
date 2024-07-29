//?/ Map: is a collection of key-value pairs.
// The Map object holds key-value pairs and remembers the original insertion order of the keys.
// Any value (both objects and primitive values) may be used as either a key or a value.


//*/ Map Properties
let a = new Map();
console.log(a); // Map {}


//*/ Map Methods
let b = new Map([
    ['name', 'John'],
    ['age', 30],
    ['city', 'New York']
]);

console.log(b); // Map { 'name' => 'John', 'age' => 30, 'city' => 'New York' }


// set(): adds or updates an element with a specified key and value to a Map object.
b.set('country', 'USA');
console.log(b); // Map { 'name' => 'John', 'age' => 30, 'city' => 'New York', 'country' => 'USA' }


// delete(): removes the specified element from a Map object.
b.set('name', 'John');
b.set('age', 30);
b.set('city', 'New York');
b.delete('age');
console.log(b); // Map { 'name' => 'John', 'city' => 'New York' }


// get(): returns the value associated to the key, or undefined if there is none.
console.log(b.get('name')); // John
console.log(b.get('age')); // undefined


// has(): returns a boolean asserting whether a value has been associated to the key in the Map object or not.
console.log(b.has('name')); // true
console.log(b.has('age')); // false


// size: returns the number of elements in a Map object.
console.log(b.size); // 2


// forEach(): executes a provided function once per each key/value pair in the Map object, in insertion order.
b.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});


// keys(): returns a new Iterator object that contains the keys for each element in the Map object in insertion order.
console.log(b.keys()); // Object [Map Iterator] {}


// values(): returns a new Iterator object that contains the values for each element in the Map object in insertion order.
console.log(b.values()); // Object [Map Iterator] {}


// entries(): returns a new Iterator object that contains an array of [key, value] for each element in the Map object in insertion order.
console.log(b.entries()); // Object [Map Iterator] {}


// clear(): removes all elements from a Map object.
b.clear();
console.log(b); // Map {}
