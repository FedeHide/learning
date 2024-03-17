/*
Tenemos dos formas para acceder a los formularios:
    - Mediante el objeto forms
    - Mediante metodos del DOM
*/

// forms
console.log(document.forms); //devuelve coleccion de todos los formularios
console.log(document.forms['formulario-donacion']); //devuelve los datos del formulario especificado
console.log(document.forms['formulario-donacion']['correo']); //devuelve el input especificado, del formulario especificado
console.log(document.forms['formulario-donacion']['correo'].value); //devuelve el valor de todo eso


// DOM + forms

document.getElementById('btnEnviar').addEventListener('click', (e) => {
    e.preventDefault();

    const correo = document.querySelector('#formulario-donacion [name=correo]');
    console.log(correo.value);

    console.log(document.forms['formulario-donacion']['pais'].value);

    const formulario = document.forms['formulario-donacion'];
    console.log(formulario['donacion'].value);

    console.log(formulario.fecha.value); //otra forma, mientras no tengan guiones o espacios

    console.log(formulario['terminos-y-condiciones'].checked);
});

