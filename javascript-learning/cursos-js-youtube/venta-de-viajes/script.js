import { barcelona, roma, paris, londres} from './ciudades.js';

// obtener los elementos del DOM
let enlaces = document.querySelectorAll('a');
let tituloElemento = document.getElementById('titulo');
let subtituloElemento = document.getElementById('subtitulo');
let precioElemento = document.getElementById('precio');
let parrafoElemento = document.getElementById('parrafo');

// Agregar un evento click para cada enlace

enlaces.forEach( function(enlace) {
    enlace.addEventListener('click', function(){

        //remover clase active a todos los enlaces
        enlaces.forEach(function(enlace) {
            enlace.classList.remove('active');
        });
        
        //agregar clase active al enlace actual
        this.classList.add('active');

        //obtener el contenido correspondiente segun el enlace
        let contenido = obtenerContenido(this.textContent);
    
        //mostrar el contenido en el DOM
        tituloElemento.innerHTML = contenido.titulo;
        subtituloElemento.innerHTML = contenido.subtitulo;
        precioElemento.innerHTML = contenido.precio;
        parrafoElemento.innerHTML = contenido.parrafo;
    });
});

//funcion para traer la informacion correcta desde ciudades.js
function obtenerContenido(enlace) {
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres
    };
    return contenido[enlace];
}