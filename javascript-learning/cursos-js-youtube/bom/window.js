// alert(); -> tira una alerta en pantalla

// innerWidth - innerHeight -> tira el ancho y el alto de la pantalla en px
console.log(`ancho ventana: ${innerWidth}px, alto ventana: ${innerHeight}px.`);


/*
window.open() -> nos permite abrir ventanas del navegador
Nota: es posible que el navegador te pida permisos para abrir una nueva ventana.

1er parametro: direccion de la nueva ventana
2do parametro: nombre de la ventana
3er parametro: string de opciones

nos devuelve un objeto para acceder a esa ventana
*/
let ventana;
const abrirVentana = () => {
    ventana = window.open('', 'mi nueva ventana', 'width=500,height=500');
    ventana.document.write('<h1>OK</h1>');
};


const cerrarVentana = () => {
    ventana.close();
};

/*
screen object - representa la pantalla del usuario
*/
console.log('Ancho de pantalla:', window.screen.width);
console.log('Alto de pantalla:', window.screen.availHeight);


/*
location -> trae objeto location para datos y metodos relacionados a la barra superior
*/
// console.log(window.location);

const cargarDocumento = () => {
    location.assign('https://google.com'); // reasigna la pagina
};



/*
history -> trae objeto ligado al historial
*/
console.log(window.history);


/*
navigator -> trae objeto ligado al historial
*/
console.log(window.navigator);

/*
confirm -> una ventana donde el usuario puede aceptar o cancelar. 
Retorna true o false dependiendo de la respuesta del usuario. 
*/
const ingresar = () => {
    const accesoPermitido = window.confirm('¿Eres mayor de edad?');
    if (accesoPermitido) {
        window.open('https://pornhub.com','','');
    } else {
        alert('le vamos a decir a tus padres');
    }
}


/*
promt -> una ventana donde el usuario puede introducir un valor
retorna una cadena de texto con la respuesta del usuario
*/

const saludo = () => {
    const nombre = prompt('Escribe tu nombre')
    alert(`Bienvenido ${nombre}`)
}

console.log(window);


/*
setTimeOut(); -> nos permite ejecutar una funcion despues de cierto tiempo
clearTimeout(id); -> el setTimeOut() devuelve un id, con ese id como parametro podemos parar el set.
setInterval(); -> nos permite ejecutar una funcion cada cierto tiempo.
*/

let id;
let id2;
let j;

const iniciar = () => {
    console.log('INICIANDO')
    j = 3;
    for (let i = 1; i <= 4; i++) {
        if (i < 4) {
            id = setTimeout(() => {
                console.log(j);
                j--
            }, (i * 1000));
        } else{
            id2 = setTimeout(() => {
                console.log('HALA');
            }, (i * 1000));
        }
    }
}

const parar = () => {
    console.log('PARANDO TIMER...');
    for (let i = 0; i < j; i++) {
        clearTimeout(id);
        clearTimeout(id2);
    }
    setTimeout(() => {
        console.log('PARADO');
    }, 2000);
}

let cuenta = 0;

const iniciar2 = () => {
    setInterval(() => {
        console.log(cuenta);
        cuenta++
    }, 1000);
};