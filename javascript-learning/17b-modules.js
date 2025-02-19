//?/ Imports: are used to import a module so that it can be used in another program.

//*/ 1. Importing a Module: imports a module for use in another program.
console.log("\n", "1. import a module");

import { userId, postId } from './17-modules.js';

console.log("userId:", userId); // Output: 18201
console.log("postId:", postId); // Output: 10


//*/ 2. Default Imports: imports a module as the default export.
console.log("\n", "2. import a module as the default export");

import foo from './17-modules.js';

console.log("foo:", foo()); // Output: Hello, World!


//*/ 3. Named Imports: imports a module as a named export.
console.log("\n", "3. import a module as a named export");

import { name, getPost } from './17-modules.js';

console.log("name:", name); // Output: Fluffy
console.log("getPost:", getPost()); // Output: Post


//*/ 4. Importing Classes: imports a class as a module.
console.log("\n", "4. import a class as a module");

import { Animal } from './17-modules.js';

const cat = new Animal('Whiskers');
cat.speak(); // Output: Whiskers makes a noise.


//*/ 5. Namespace Imports: imports all exports from a module as a namespace object.
console.log("\n", "5. import all exports from a module as a namespace object");

import * as data from './17-modules.js';

console.log("data.userId:", data.userId); // Output: 18201
console.log("data.postId:", data.postId); // Output: 10
console.log("data.name:", data.name); // Output: Fluffy
console.log("data.getPost:", data.getPost()); // Output: Post
const dog = new data.Animal('Barky');
dog.speak(); // Output: Barky makes a noise.
