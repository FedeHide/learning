//?/ Modules: are reusable pieces of code that can be exported from one program and imported for use in another program.
//?/ Exports: are used to export a module so that it can be imported in another program.

//*/ 1. Exporting a Module: defines a module that can be exported for use in another program.
// To export a module, use the export keyword followed by the name of the module.

let userId = 18201;
let postId = 10;

export { userId, postId };


//*/ 2. Default Exports: exports a module as the default export.
//To export a module as the default export, use the export default keywords followed by the name of the module.

export default function foo() {
    return 'Hello, World!';
}


//*/ 3. Named Exports: exports a module as a named export.
//To export a module as a named export, use the export keyword followed by the name of the module.

export const name = 'Fluffy';
export function getPost() {
    return 'Post';
}

//*/ 4. Exporting Classes: exports a class as a module.
//To export a class as a module, use the export keyword followed by the class name.

export class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}
