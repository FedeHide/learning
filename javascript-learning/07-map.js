//?/ Map: is a ordered collection of key-value pairs. The keys are unique and the values can be of any type.
// difference between Map and Object:
// 1. The keys in Map are ordered while the keys added to object are not.
// 2. You can get the size of a Map, while the number of properties in an object has to be determined manually.
// 3. The Map object is a simple key/value map and can iterate its elements in insertion order.
// 4. The Object has a prototype, so there are default keys in the map that could collide with your keys if you're not careful.
// 5. The keys of an Object are Strings and Symbols, where they can be any value for a Map.
// 6. You can directly iterate over Map with the help of methods has(), keys(), values(), and entries().
// 7. The Map is iterable while the Object has to be converted to an array.




//*/ Map literals
let literalMap = new Map([
    ['name', 'John'],
    ['age', 30],
    ['city', 'New York'],
    ['children', 2],
    ['married', true],
    ['run', function () {
        console.log("Running");
    }]
]);
console.log("map literal:", literalMap);
literalMap.get('run')(); // Running


//*/ Map Constructor
console.log("\n")

let constructorMap = new Map();
constructorMap.set('name', 'John');
constructorMap.set('age', 30);
constructorMap.set('city', 'New York');
console.log("map constructor:", constructorMap);


//*/ Map Properties
console.log("\n", "Map Properties");

// size: returns the number of elements in a Map object.
console.log("size:", literalMap.size); // 3


//*/ Map Methods
console.log("\n", "Map Methods");

let map1 = new Map([
    ['name', 'John'],
    ['age', 30],
    ['city', 'New York']
]);


// set(): adds or updates an element with a specified key and value to a Map object.
map1.set('country', 'USA');
console.log("set():", map1); // Map { 'name' => 'John', 'age' => 30, 'city' => 'New York', 'country' => 'USA' }


// delete(): removes the specified element from a Map object.
map1.delete('age');
console.log("delete():", map1); // Map { 'name' => 'John', 'city' => 'New York' }


// get(): returns the value associated to the key, or undefined if there is none.
console.log("get():", map1.get('name')); // John
console.log("get():", map1.get('age')); // undefined


// has(): returns a boolean asserting whether a value has been associated to the key in the Map object or not.
console.log("has():", map1.has('name')); // true
console.log("has():", map1.has('age')); // false


// forEach(): executes a provided function once per each key/value pair in the Map object, in insertion order.
map1.forEach((value, key) => {
    console.log("forEach():", `${key}: ${value}`);
});


// keys(): returns a new Iterator object that contains the keys for each element in the Map object in insertion order.
console.log("keys():", map1.keys()); // Object [Map Iterator] {}


// values(): returns a new Iterator object that contains the values for each element in the Map object in insertion order.
console.log("values():", map1.values()); // Object [Map Iterator] {}


// entries(): returns a new Iterator object that contains an array of [key, value] for each element in the Map object in insertion order.
console.log("entries():", map1.entries()); // Object [Map Iterator] {}


// clear(): removes all elements from a Map object.
map1.clear();
console.log("clear():", map1); // Map {}
