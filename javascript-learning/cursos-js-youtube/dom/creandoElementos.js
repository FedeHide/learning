// crear y agregar elemento

const agregarCaja = () => {
    /*
    1. creamos el elemento
        createElement - recibe como parametro una cadena de texto con la etiqueta que queremos crear
    */
    const nuevaCaja = document.createElement('div');

    /*
    2. agregamos texto y atributos
    */

    nuevaCaja.textContent = 'Nueva Caja'; //textContent -> similar a innerHTML pero mejor performance y mas seguro
    nuevaCaja.setAttribute('id', 'nuevo-id');
    nuevaCaja.setAttribute('class', 'caja activa');

    /*
    3. agregamos el elemento al DOM
    */

    const contenedor = document.getElementById('contenedor1');

    // .appendChild() -> agrega un elemento al final
    contenedor.appendChild(nuevaCaja);

    /*
    .insertAdjacentElement() - nos permite agregar un elemento.
    Valores:
        afterbegin - como primer elemento
        beforebegin - antes del elemento padre
        bedoreend - como ultimo elemento
        afterend - despues del elemento padre
    */

    // .replaceWith() - nos permite reemplazar el elemento por otro
    // document.querySelector('#contenedor1 .caja').replaceWith(nuevaCaja);
    
}


// eliminar elemento

const eliminarCaja = () => {
    const padre = document.getElementById('contenedor1');
    const cajaAEliminar = padre.querySelector('.caja');

    if(cajaAEliminar) {
        padre.removeChild(cajaAEliminar);
    }
};


