// ciclo for: 
//
//var i de index que comienza en 0 y recorre todo el array cumpoliendo la condicion y aumentando de 1 en 1.

var estudiantes = ["ruki", "anya", "jorge", "marimiau"];

function saludarEstudiantes (estudiante) {
    console.log(`Hola, ${estudiante}`);
}

for (var i = 0; i < estudiantes.length; i++) {
    saludarEstudiantes (estudiantes [i]);
}



// ciclo for of:
//
// crea una variable donde su valor va cambiando por cada valor dentro del array.

var estudiantes = ["ruki", "anya", "jorge", "marimiau"];

function saludarEstudiantes (estudiante) {
    console.log(`Hola, ${estudiante}`);
}

for (var estudiante of estudiantes) {
    saludarEstudiantes (estudiante);
}


//ciclo while:
//
// mientras se cumpla la condicion va a ejecutar el bloque.

var estudiantes = ["ruki", "anya", "jorge", "marimiau"];

function saludarEstudiantes (estudiante) {
    console.log(`Hola, ${estudiante}`);
}

while (estudiantes.length > 0) {
    console.log(estudiantes);
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}


