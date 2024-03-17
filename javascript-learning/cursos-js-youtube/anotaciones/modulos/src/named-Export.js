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


export {nombre, obtenerPost};

