
// funciones

// let a = prompt('De Celsius a Fahrenheit: ');

// function deCelsiusAFahrenheit (a) {

//     if (a >= 0 || a <= 0) {
//         return (((parseInt(a) * 9/5) + 32));
//     } else {
//         console.log ('Escriba solo un numero entero.')
//     }


// }

// let respuesta = deCelsiusAFahrenheit(a);

// console.log (`La temperatura de ${a} en grados Celsius es igual a `, respuesta + ' Fahrenheit.');




//  funcion flecha


// let num = '10';

// // function sumarDecena(numero) {
// //     return numero + 12;
// // }

// let sumarDecena = numero => numero + 12; // si recibe un solo parametro y retorna una sola linea se puede simplificar en arrow function

// const respuesta = sumarDecena(parseInt(num));

// console.log(respuesta);


///////////////////////////////////////////////////////////////////////////////////////////////////



// objeto

// let auto1 = {
//     marca: 'Fiat',
//     modelo: 'Uno',
//     peso: 980,
//     color: 'Rojo'
// }

// const auto2 = {
//     marca: 'Renault',
//     modelo: '12',
//     peso: 1100,
//     color: 'Negro'
// }

// auto1.marca = 'BMW';

// console.log('Auto 1: ', auto1);
// console.log('Auto 2: ', auto2);

// console.log('El color del auto 1 es: ', auto1.color);
// console.log('El color del auto 1 es: ', auto1.marca);




// Otro ejemplo

// const vendedor = {
//     nombre: 'Pedro',
//     apellido: 'Gonzalez',
//     empresa: 'Auto S.A.',
//     habilidadesBlandas: ['carisma', 'puntualidad'], // Array
//     vender: function(){
//         return "Pedro ha vendido un auto";          // Funcion
//     },
//     nombreCompleto: function(){
//         return this.nombre + " " + this.apellido;   // this.propiedad sirve para acceder a las propiedades del objeto fuera del scope de la funcion.
//     }
// }

// console.log(vendedor.nombreCompleto());
// console.log(vendedor.vender());
// console.log(vendedor.habilidadesBlandas);






///////////////////////////////////////////////////////////////////////////////////////////////////



//ciclo for

//let tecnologias = ['HTML', 'CSS', 'javascript', 'react', 'angular'];

// let seleccionable2 = document.getElementById('seleccionable2');
// let texto = '';

// for (let i = 0; i < tecnologias.length;i++) {
//     texto += tecnologias[i];

//     if (i < tecnologias.length - 1) {
//         texto += ', '
//     }
//     seleccionable2.textContent = texto;
// }




// ciclo for of

// for (tecnologia of tecnologias) {
//     console.log(tecnologia);
// }




// ciclo for in

// const alumno = {
//     nombre: 'Ricardo',
//     edad: 25,
//     tecnologias: ['HTML', 'CSS']
// }

// for (const key in alumno) {
//     console.log(alumno[key]);
// }




// ciclo for each

// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// numeros.forEach(numero => {
//     console.log(numero);
// });




///////////////////////////////////////////////////////////////////////////////////////////////////


// ciclo while

// let edad = 0;

// while (edad < 18) {
//     console.log(`Tienes ${edad} años y aun eres un niño`);
//     edad++;
// }

// console.log(`Tienes ${edad} años y ya eres mayor de edad`);



// ciclo do while

// let edad2 = 0;

// do {
//     console.log(`Tienes ${edad2} años y aun eres un niño`);
//     edad2++;
// } while (edad2 < 18);


// console.log(`Tienes ${edad2} años y ya eres mayor de edad`);



///////////////////////////////////////////////////////////////////////////////////////////////////

