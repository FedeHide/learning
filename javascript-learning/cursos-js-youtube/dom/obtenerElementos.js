/*
getElementById
nos permite obtener un elemento en base a su atributo id
*/

const contenedor1 = document.getElementById('contenedor1');

console.log(contenedor1);

/*
children
nos permite obtener los elementos hijo
*/
console.log(contenedor1.children);


/*
parentElement
nos permite obtener el elemento padre de un elemento
*/
console.log(contenedor1.parentElement);


/*
getElementsByTagName
nos permite obtener una coleccion de elementos en base a la etiqueta.
Nota: devuelve una coleccion html. Una coleccion no es un arreglo
*/ 

const divs = document.getElementsByTagName('div');
console.log(divs);


/*
getElementsByClassName
nos permite obtener una coleccion de elementos en base a su clase.
Nota: devuelve una coleccion html. Una coleccion no es un arreglo
*/ 

const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores);


/*
querySelector
nos devuelve el PRIMER elemento que coincida con un selector de css.
Nota: nos devuelve un nodeList (podemos usar forEach)
*/

const caja = document.querySelector('#contenedor1 .caja');
console.log(caja);


/*
querySelectorAll
nos permite obtener una coleccion de elementos en base a un selector de css
Nota: nos devuelve un nodeList (podemos usar forEach)
*/

const cajas = document.querySelectorAll('#contenedor1 .caja');
console.log(cajas);

/*
closest
nos permite buscar de adentro hacia afuera en busca de un elemento
*/

const ultimaCaja = document.querySelector('#contenedor2 .caja:last-child');
console.log(ultimaCaja);
console.log(ultimaCaja.closest('.contenedor-principal'));


/*
podemos encadenar todos los metodos para obtener elementos.
*/

const contenedor2 = document.getElementById('contenedor2');
console.log(contenedor2.querySelector('.caja'));