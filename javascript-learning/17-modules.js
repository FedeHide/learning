//?/ Modules: are reusable pieces of code that can be exported from one program and imported for use in another program.

//?/ Exports: are used to export a module so that it can be imported in another program.

//*/ 1. Exporting a Module: defines a module that can be exported for use in another program.
let userId = 1;
let postId = 1;

export { userId, postId };

//*/ 2. Default Exports: exports a module as the default export.
export default function foo() {
    console.log('Hello, World!');
}

//*/ 3. Named Exports: exports a module as a named export.
export const name = 'Fluffy';
export function getPost() {
    return 'Post';
}

//*/ 4. Exporting Classes: exports a class as a module.
export class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

//?/ Imports: are used to import a module so that it can be used in another program.

//*/ 1. Importing a Module: imports a module for use in another program.
import { userId, postId } from './17-modules.js';

console.log(userId, postId); // Output: 1 1

//*/ 2. Default Imports: imports a module as the default export.
import foo from './17-modules.js';

foo(); // Output: Hello, World!

//*/ 3. Named Imports: imports a module as a named export.
import { name, getPost } from './17-modules.js';

console.log(name); // Output: Fluffy
console.log(getPost()); // Output: Post

//*/ 4. Importing Classes: imports a class as a module.
import { Animal } from './17-modules.js';

const cat = new Animal('Fluffy');
cat.speak(); // Output: Fluffy makes a noise.

//*/ 5. Namespace Imports: imports all exports from a module as a namespace object.
import * as data from './17-modules.js';

console.log(data.userId, data.postId); // Output: 1 1
console.log(data.name); // Output: Fluffy
console.log(data.getPost()); // Output: Post
const dog = new data.Animal('Buddy');
dog.speak(); // Output: Buddy makes a noise.
