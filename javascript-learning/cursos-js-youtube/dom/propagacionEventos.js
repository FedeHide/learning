/* solo en contenedor
bubbling (false, por defecto)
En bubbling el evento del elemento hijo reacciona primero y despues el evento del elemento padre

capturing (true)
En capturing el elemento padre reacciona primero y despues el elemento hijo
*/

const contenedor = document.getElementById('contenedor1');

contenedor.addEventListener('click', (e) => {
    console.log('click en el contenedor')
});

const primeraCaja = document.querySelector('.caja');
primeraCaja.addEventListener('click', (e) => {
    // e.stopPropagation(); // parar la propagacion
    console.log('click en la caja 1')
});
