/*
modificar estilos css mediante clases
*/

const primeraCaja = document.querySelector('#contenedor1 .caja');

// classList -> manipula el contenido de la clase (ej. add(), remove())
const agregarClase = () => {
    primeraCaja.classList.add('activa'); 
};

const eliminarClase = () => {
    primeraCaja.classList.remove('activa');
};


// classList.toggle() -> nos permite alternar clases de un elemento
const toggleClass = () => {
    primeraCaja.classList.toggle('activa');
};


// classList.contains() - nos permite comprobar si el elemento contiene una clase
const comprobarClase = () => {
    if(primeraCaja.classList.contains('activa')) {
        console.log('La caja tiene la clase "activa"');
    } else {
        console.log('La caja no tiene la clase "activa"');
    }
};



/*
modificar estilos inline
*/

const ultimaCaja = document.querySelector('#contenedor2 .caja:last-child');
ultimaCaja.style.background = '#000';
ultimaCaja.style.color = '#fff';

const cajas = document.querySelectorAll('.caja');
let tamaño = 24;

const incrementarFuente = () => {
    cajas.forEach(caja => {
        caja.style.fontSize = `${tamaño + 1}px`;
    });
    tamaño++;
    console.log(cajas[0].style.fontSize);
};

const disminuirFuente = () => {
    cajas.forEach((caja) => {
        caja.style.fontSize = `${tamaño - 1}px`;
    });
    tamaño--;
};