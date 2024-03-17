const crearCookie = () => {
    document.cookie = 'name=ruki; expires=1 Jan 2024 01:00:00 UTC';
};

const iniciarSesion = () => {
    const usuario = prompt('Usuario:');
    document.cookie = `name=${usuario}; expires=1 Jan 2024 01:00:00 UTC`;
    alert('Sesion iniciada');
};

/*
Forma para obtener el usuario de las cookies
*/
let usuario;

const cookies = document.cookie.split(';');

cookies.forEach((cookie) => {
    const propiedad = cookie.split('=')[0];
    if(propiedad === 'name') {
        usuario = cookie.split('=')[1];
    }
});

if(usuario) {
    console.log(`Hola ${usuario}`);
} else {
    console.log('por favor inicia sesion');
}


const cerrarSesion = () => {
    document.cookie = 'name=; expires=1 Jan 2022 01:00:00 UTC';
}


