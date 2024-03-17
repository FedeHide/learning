const boton1 = document.getElementById('boton1');
const primeraCaja = document.querySelector('.caja');

boton1.addEventListener('click', () => {
    primeraCaja.classList.toggle('activa');
});


/*
agregando el evento a multiples elementos.
Podemos hacerlo recorriendolos mediante forEach, ya que es un nodeList.
Nota: esta no es la forma mas optima...
*/

const cajas = document.querySelectorAll('.caja');

cajas.forEach((caja) => {
    caja.addEventListener('click', (e) => {
        caja.classList.toggle('activa');
        console.log(`Haz hecho click en: ${e.target.innerHTML}`);
    });
    caja.addEventListener('mouseover', () => {
        caja.style.cursor = 'pointer';
    });
});