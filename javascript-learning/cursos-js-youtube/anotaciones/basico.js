

// comentarios

// linea
/* 
    bloque 
*/




// Primitivos

/*
let variableNumero = 10;  // Integers
let variableDecimal = 10.10;  // Float

let variableTexto = 'Texto' // String , char
let variableTexto2 = "Texto" // String , char (alternativa)
let variableTexto3 = `Esta es una variable distinta ${variableNumero}` // String concatenado , con backticks

let valorLogico = true; // Boolean
let undefined // Undefined - valor no definido
let variable = null; // Null - no hay valor



// Strings


/*
let string = 'Albert Einstein dijo que \'La relatividad está re piola\'';

let string2 = 'Esto esta arriba \nEsto esta abajo';

console.log(string);
console.log(string.length);
console.log(string2);


let texto = 'restituir';

let resultado = texto.slice(0, 2); // desde 0 hasta 2 NO inclusive

console.log(resultado);

*/



///////////////////////////////////////////////////////////////////////////////////////////////////


// algunos metodos


// let n = "Texto por consola";

// console.log(n);



// // Eventos DOM

// function mostrar() {
//     document.getElementById('seleccionable').innerHTML = Date();
// }




// // convertir datos

// Number (); // numero
// parseInt (); // integer
// parseFloat (); // float
// string (); // string

// /////////////////////////////////////////////////////////////////////////////////////////////////


// spread operator

// const suma = (a, b) => {
//     return c = a + b;
// }

// let arreglo = [4, 2];

// console.log(suma(...arreglo));


// const dias1 = ['lunes', 'martes', 'miercoles'];
// const dias2 = [...dias1, 'jueves', 'viernes'];

// console.log(dias2);


// const objeto1 = {
//     modelo: 'Iphone 13 PRO Max'
// }

// const objeto2 = {
//     marca: 'Apple'
// }

// const objeto3 = {
//     ...objeto1,
//     ...objeto2
// }

// console.log(objeto3);



// /////////////////////////////////////////////////////////////////////////////////////////////////


// typeof


// let a = typeof 'ruki'; //String
// let b = typeof 3.14; // number
// let c = typeof NaN; // number
// let d = typeof true; // boolean
// let e = typeof ['anya', 'ruki', 'nix', 'orion']; //objeto (aunque sea un array, en js es un tipo de objeto)
// let f = typeof {curso: 'javascript'}; // objeto
// let g = typeof new Date(); // objeto
// let h = typeof function(){}; // funcion
// let i = typeof variable; // undefined
// let j = typeof null; // objeto


// console.log(j);


// /////////////////////////////////////////////////////////////////////////////////////////////////


// instanceof

// let a = [1, 2, 3, 4, 5];
// let b = new Date();
// let c = new Set();
// let d = new Map();
// let e = null;

// console.log(a instanceof Array);
// console.log(b instanceof Date);
// console.log(c instanceof Set);
// console.log(d instanceof Map);


// if (b instanceof Array) {
//     console.log('Es un array');
// } else {
//     console.log('No es un array')
// }


// /////////////////////////////////////////////////////////////////////////////////////////////////


// try catch

// try {
//     // ejecutamos una porcion de codigo
//     console.log('llamando al backend');
//     setTimeout (() => {
//         console.log('el backend no responde');
//         console.log('cliente apto para la comprea');
//     }, 1000);
// } catch(error) {
//     // tomamos el error y hacemos algo con el
//     console.log('algo fallo', error);
// } finally {
//     // se ejecuta siempre por mas que falle o no falle
//     console.log('se ejecuta siempre');
// }


// /////////////////////////////////////////////////////////////////////////////////////////////////


// callback

// function mostrarConsola(num) {
//     console.log(num);
// };

// function calcular(num1, num2, callback) {
//     let suma = num1 + num2;
//     callback(suma);
// }

// calcular(1, 3, mostrarConsola);


///////////////////////////////////////////////////////////////////////////////////////////////////


// promises


// ejemplo 1

// let promesa = new Promise((response, reject) => {
//     let resp = {
//         response: 200,
//         description: 'Esta info es importante'
//     }
//     response(resp);
//     reject('Falló');
// });


// promesa.then(res => {
//     console.log(res.description);
// })
// .catch(error => {
//     console.warn(error);
// });



// ejemplo 2

// const x = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const success = true;   // cambiar a false para simular error
//         if (success) {
//             resolve('¡Operación exitosa!');
//         } else {
//             reject('¡Algo salió mal!');
//         }
//     }, 2000);
// });


// x.then(result => {
//         console.log(result);
//     })
//     .catch(error => {
//         console.error(error);
//     });




///////////////////////////////////////////////////////////////////////////////////////////////////


// Async & await


// let promesa1 = new Promise((response) => {
//     setTimeout(() => {
//         let resp = {
//             response: 200,
//             description: '1 esta info es importante'
//         };
//         response(resp);
//     }, 3000);
// });

// let promesa2 = new Promise((response) => {
//     setTimeout(() => {
//         let resp = {
//             response: 200,
//             description: '2 esta info es importante pero suele demorar mucho'
//         };
//         response(resp);
//     }, 5000);
// });

// let promesa3 = new Promise((response) => {
//     setTimeout(() => {
//         let resp = {
//             response: 200,
//             description: '3 informacion rapida'
//         };
//         response(resp);
//     }, 2500);
// });


// async function ejecutarPromesas () {
//     let respuestaProm1 = await promesa1;
//     console.log(respuestaProm1);

//     let respuestaProm2 = await promesa2;
//     console.log(respuestaProm2);

//     let respuestaProm3 = await promesa3;
//     console.log(respuestaProm3);
// };

// ejecutarPromesas();


///////////////////////////////////////////////////////////////////////////////////////////////////


// Api´s


// let urlBase = 'https://jsonplaceholder.typicode.com';
// let query = 'comments?postId=5';
// let requestBody = {
//     title: 'Ricardo comenta sobre tu foto',
//     body: '¡Que bella foto!',
//     userId: 1
// }
// let posteo = 5;
// let requestBody2 = {
//     id: 3,
//     title: 'Ricardo comenta sobre tu foto',
//     body: '¡Que bella foto!',
//     userId: 1
// }
// let modificacion = {
//     title: 'Este titulo ha sido modificado'
// }
// let post = 10;
// let elementoAEliminar = 7;

//GET: pedir informacion

//hard-coded
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(json => console.log(json))


// dinamico
// fetch(`${urlBase}/${query}`)
//     .then(response => response.json())
//     .then(json => console.log(json))    




//POST: enviar informacion

// fetch(`${urlBase}/posts`, {
//     method: 'POST',
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8'
//     },
//     body: JSON.stringify(requestBody)
// })
//     .then(response => response.json())
//     .then(json => console.log(json))




//PUT: editar informacion

// fetch(`${urlBase}/posts/${posteo}`, {
//     method: 'PUT',
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8'
//     },
//     body: JSON.stringify(requestBody2)
// })
//     .then(response => response.json())
//     .then(json => console.log(json))




//PATCH: editar informacion (solo se edita un atributo)

// fetch(`${urlBase}/posts/${post}`, {
//     method: 'PATCH',
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8'
//     },
//     body: JSON.stringify(modificacion)
// })
//     .then(Response => Response.json())
//     .then(json => console.log(json))




//DELETE: borrar informacion

// fetch(`${urlBase}/posts/${elementoAEliminar}`, {
//     method: 'DELETE',
// });




///////////////////////////////////////////////////////////////////////////////////////////////////


// CLASES

class Usuario { // definicion
    tipo = 'usuario';  // propiedades: puede contener variables, que dentro de la clase se llaman propiedades.

    constructor (nombre, apellido) {  // constructor: es una metodo para inicializar un objeto creado a partir de una clase.
        this.nombre = nombre;  // accede a la propiedad nombre, si no existe la crea y guarda el valor que le pasan en el argumento.
        this.apellido = apellido;  //this hace referencia a la propia clase

        console.log('Nuevo usuario registrado!');
    }

    obtenerNombreCompleto() {  // metodos: la clase puede contener funciones, se llaman metodos
        console.log('Obteniendo datos...');
        return `${this.nombre} ${this.apellido}`;
    }
}


class Moderador extends Usuario { // extends: clase extiende de la super clase, heredando todas sus propiedades y metodos.
    static registrados = 1000; //creamos una propiedad estatica para poder acceder a ella sin necesidad de crear un objeto

    constructor (nombre, apellido, permisos) {
        super(nombre, apellido);  // super: hereda las propiedades creadas por la super clase
        this.permisos = permisos;
    }

    borrarPost(id) {
        if (this.permisos.includes('borrar')) { // includes: propiedad para determinar si existe un valor.
            console.log(`El post con el id ${id} ha sido borrado`);
        }
    }

    static borrar(id) {
        console.log(`El usuario con el id ${id} ha sido borrado de la base de datos.`)  // creamos un metodo estatico para no tener que crear un objeto al utilizarlo
    }
}

const usuario = new Usuario ('Ruki', 'El Purris');  //creando una nueva instancia de la clase Usuario
console.log(usuario.obtenerNombreCompleto());

const moderador = new Moderador ('Anya', 'La Nena', ['editar', 'borrar']);

Moderador.borrar(1); //utilizamos el metodo estatico referenciando la clase
console.log(Moderador.registrados); //accedemos a la propiedad 