document.getElementById('formulario').addEventListener('submit', (event) => {
    event.preventDefault()

    //validar campo nombre
    let entradaNombre = document.getElementById('name');
    let errorNombre = document.getElementById('nameError');

    if (entradaNombre.value.trim() === '') {
        errorNombre.textContent = 'Por favor, introduci tu nombre';
        errorNombre.classList.add('error-message');
    } else {
        errorNombre.textContent = '';
        errorNombre.classList.remove('error-message');
    }


    //validar email
    let emailEntrada = document.getElementById('email');
    let errorEmail = document.getElementById('emailError');
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  //patron de validacion basico regex

    if (!emailPattern.test(emailEntrada.value)) {
        errorEmail.textContent = 'Por favor, introduci un email valido';
        errorEmail.classList.add('error-message');
    } else {
        errorEmail.textContent = '';
        errorEmail.classList.remove('error-message');
    }


    //validar password
    let passwordEntrada = document.getElementById('password');
    let errorPassword = document.getElementById('passwordError');
    let passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;  //patron de validacion basico regex (Minimum eight characters, at least one letter and one number)

    if (!passwordPattern.test(passwordEntrada.value)) {
        errorPassword.textContent = 'El password debe tener al menos 8 caracteres y al menos un numero.';
        errorPassword.classList.add('error-message');
    } else {
        errorPassword.textContent = '';
        errorPassword.classList.remove('error-message');
    }

    //si todos los campos son validos enviar formulario
    if (!errorNombre.textContent && !errorEmail.textContent && !errorPassword.textContent) {
        alert('El formulario se ha enviado con exito');
        document.getElementById('formulario').reset();
    }
})