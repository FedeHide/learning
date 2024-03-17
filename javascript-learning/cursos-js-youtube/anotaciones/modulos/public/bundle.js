'use strict';

/*
EXPORT DEFAULT
*/

var foo = () => {   //no hace falta declararla, osea variable ni nombre, se usa para exportar una unica cosa del documento
    console.log('ok');
};


// forma 2 : la comento porque solo se puede exportar una por default , sino se rompe.

// const gata = 'Anya';

// export default gata;

// Forma 1 - export delante de los bloques   //sirven tanto para named imports como para namespace imports
// export const nombre = 'Ruki';  // named export

// export const obtenerPost  = () => {
//     return ["post1", "post2", "post3"];
// };




// Forma 2 - export al final del documento //sirven tanto para named imports como para namespace imports
const nombre = 'Ruki';  // named export

const obtenerPost  = () => {
    return ["post1", "post2", "post3"];
};

// tambien llamado index.js, el archivo inicial y principal donde importaremos codigo de otros archivos



console.log('archivo inicial');
foo();
console.log(nombre);
console.log(obtenerPost());
