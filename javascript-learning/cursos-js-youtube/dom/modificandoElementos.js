/*
elemento.innerHTML
nos permite cambiar el contenido html de un elemento
*/

const primeraCaja = document.querySelector('.caja');
primeraCaja.innerHTML = '<b>Hola!</b>';


/*
elemento.attribute
nos permite acceder y cambiar atributos del elemento
*/

primeraCaja.id = 'nuevo-id';


/*
elemento.setAttribute()
nos permite agregar o establecer el valor de un atributo del elemento
Es parecido al anterior pero mas flexible, por ejemplo no podriamos haber agregado el atributo personalizado 'data-id'
*/

primeraCaja.setAttribute('class', 'caja activa');
primeraCaja.setAttribute('data-id', '123-456-789');


/*
elemento.style.property
nos permite cambiar los estilos css de un elemento
*/

const contenedor2Caja1 = document.querySelector('#contenedor2 .caja');
contenedor2Caja1.style.background = '#000';
contenedor2Caja1.style.color = '#fff';
contenedor2Caja1.style.textTransform = 'uppercase'; //text-transform en css tiene guion y en js no se admite por lo que hay que escribirlo en camelCase