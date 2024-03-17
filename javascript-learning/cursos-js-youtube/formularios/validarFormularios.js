const formulario = document.getElementById('formulario-donacion');  
const emailRegex = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const datos = {
        correo: formulario.correo.value,  //accedemos a los inputs del formulario
        pais: formulario.pais.value,
        donacion: formulario.donacion.value,
        fecha: formulario.fecha.value,
        terminos: formulario['terminos-y-condiciones'].checked
    };

    if(!emailRegex.test(datos.correo)) {
        console.log('Correo invalido');
        return;
    }

    if(datos.pais === '') {
        console.log('Pais invalido');
        return;
    }

    if(datos.donacion === '') {
        console.log('Selecciona una cantidad a donar');
        return;
    }

    if(datos.fecha === '') {
        console.log('Fecha invalida');
        return;
    }

    if(!datos.terminos) {
        console.log('Acepte los terminos y condiciones');
        return;
    }

    console.log('Enviando datos...');

    setTimeout(() => {
        console.log(datos);
    }, 2000);
});