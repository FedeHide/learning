// Array

// const array = ['Curso HTML', 'Curso CSS', 'Curso JS'];

// console.log(array[array.length-1]); // Entrar al ultimo elemento del array, en este caso array.length = 3 y el ultimo elemento es indice 2 porque empieza en 0.


// const array2 = ['Despertarse', 'Comer', 'Estudiar', 'Dormir'];



// let texto = '';

// for (let i = 0; i < array2.length; i++) {
//     texto += "<li>" + array2[i] + "</li>";
//     document.getElementById('selectArray2').innerHTML = texto;
// }



// const array3 = [1, 2, 3];
// array3[array3.length] = 4;  // agrega un elemento al final de la lista
// array3[array3.length] = 5;

// console.log(array3);



// let array4 = ['manzana', 'pera', 'banana', 'naranja', 'manzana', 'naranja'];
// let array4b = ['manzana', 'manzana', 'manzana', 'manzana', 'manzana', 'manzana'];
// let array4c = ['manzana', 'pera', 'banana', 'naranja', 'manzana', 'naranja'];
// let array4d = ['manzana', 'pera', 'banana', 'naranja', 'manzana', 'naranja'];
// let array4e = ['manzana', 'pera', 'banana', 'naranja', 'manzana', 'naranja'];

// const resultado4 = array4.filter(x => x == 'manzana'); // crea una nueva matriz eliminando los elementos que no pertenecen

// const resultado4b = array4b.map(x => {   // crea una nueva array mediante la transformación de cada elemento en una array, de forma individual
//     if (x == 'manzana') {
//         return 'naranja';
//     }
// });

// const resultado4c = array4c.fill('naranja', 1); // cambia los elementos a partir de un numero del index

// const resultado4d = array4d.find(x => x == 'pera'); // ejecuta la función callback una vez por cada índice del array hasta que encuentre uno en el que el callback devuelva un valor verdadero

// const resultado4e = array4e.findIndex(x => x == 'pera'); // retorna el indice del elemento

// console.log(resultado4);
// console.log(resultado4b);
// console.log(resultado4c);
// console.log(resultado4d);
// console.log(resultado4e);




// let array5 = [
//     {nombre: 'Pedro', apellido: 'Gonzalez'},
//     {nombre: 'Maria', apellido: 'Gonzalez'},
//     {nombre: 'Lucia', apellido: 'Gonzalez'},
//     {nombre: 'Ricardo', apellido: 'Perez'},
//     {nombre: 'Alfredo', apellido: 'Juarez'},
//     {nombre: 'Fernando', apellido: 'Fernandez'}
// ]

// let resultado5 = array5.filter(x => x.apellido == 'Gonzalez');

// console.log(resultado5);

// for (let i = 0; i < resultado5.length; i++) {
//     const element = resultado5[i];
//     console.log(element.nombre);
// }


// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// console.log(number.sort((x,y) => x - y)); // el sort solo ordena desde el primer caracter, para lograr ordenar numeros mas grandes hay que compararlos entre si.


///////////////////////////////////////////////////////////////////////////////////////////////////


// set

// let array = ['cama', 'armario', 'escritorio', 'cama', 'estante', 'mesita de luz'];

// function comprar (muebles) {
//     console.log (muebles);
// }

// function comprarSoloUnaUnidad (muebles) {
//     let unicaUnidad = new Set (muebles);
//     console.log (unicaUnidad);
// }

// comprarSoloUnaUnidad(array);


// let array2 = [1, 1, 2, 2, 3, 3, 3, 4, 4];
// let unico = new Set(array2);
// let nuevoArray = [...unico];

// console.log(nuevoArray);


///////////////////////////////////////////////////////////////////////////////////////////////////


// Map

// let mapa = new Map ([
//     ['computadoras', 10],
//     ['tablets', 5],
//     ['celulares', 15]
// ])

// mapa.forEach((valor, clave) => {
//     console.log(`Clave: ${clave}, Valor: ${valor}`);
// })


///////////////////////////////////////////////////////////////////////////////////////////////////