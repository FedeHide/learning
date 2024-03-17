// tambien llamado index.js, el archivo inicial y principal donde importaremos codigo de otros archivos


/*
DEFAULT IMPORTS
*/

import foo from './export-default.js';  //default import


console.log('archivo inicial');
foo();



/*
    NAMED IMPORTS
*/

// import {nombre as nombreImportado, obtenerPost} from './namedExports.js';  //named import
// console.log('Mi gatito se llama ' + nombreImportado);
// console.log(obtenerPost());


/*
    NAMESPACE IMPORTS
*/

import * as datos from './named-Export.js';
console.log(datos.nombre);
console.log(datos.obtenerPost());