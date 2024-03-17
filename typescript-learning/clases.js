"use strict";
// CLASES
class Persona {
    nombre;
    constructor(nombre) {
        this.nombre = nombre;
    }
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre}.`);
    }
}
