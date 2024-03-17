// Selecciona un número al azar
let numeroAzar = Math.floor(Math.random()*100) + 1;
let numeroEntrada = document.getElementById('numeroEntrada');
let mensaje = document.getElementById('mensaje');
let botonComprobar = document.getElementById('botonComprobar');
let botonReload = document.getElementById('botonReload');
let intentos = 1;

// Esta accion se va a ejecuttar cuando se toque el botón comprobar.
function chequearResultado(){
    let numeroIngresado = parseInt(numeroEntrada.value);

    if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {
        mensaje.textContent = "Por favor, introduce un número válido entre 1 y 100";
        return
    }

    if (numeroIngresado === numeroAzar ) {
        mensaje.textContent = `¡Felicitaciones! ¡Has adivinado el número en ${intentos} intentos!`;
        mensaje.style.color = "green";
        numeroEntrada.disable = true;
        botonComprobar.style.visibility = "hidden";
        botonReload.style.visibility = "visible";
    } else if (numeroIngresado < numeroAzar) {
        mensaje.textContent = `¡Más alto! El número es mayor que ${numeroEntrada.value}`;
        mensaje.style.color = "red";
        intentos++;
    } else {
        mensaje.textContent = `¡Más bajo! El número es menor que ${numeroEntrada.value}`;
        mensaje.style.color = "red";
        intentos++;
    }
}

