## Funciones Principales

### `add(value)`

Esta función se encarga de agregar el valor proporcionado a la pantalla de la calculadora. Recibe un parámetro `value` que representa el valor que se debe agregar. Utiliza `document.getElementById('screen')` para obtener el elemento de la pantalla por su identificador y luego actualiza el valor del campo `value` concatenando el nuevo valor.

    function add(value) {
        document.getElementById('screen').value += value;
    }

Es importante tener en cuenta que el uso de `eval()` puede presentar riesgos de seguridad si se permite que los usuarios ingresen código arbitrario. En este caso, asumimos que el código solo se ejecutará en un entorno seguro.

### `erase()`

La función `erase()` se utiliza para borrar el contenido de la pantalla de la calculadora. Simplemente asigna una cadena vacía al campo `value` del elemento de la pantalla.

    function erase() {
        document.getElementById('screen').value = '';
    }

### `removeLastDigit()`

La función `removeLastDigit()` se utiliza para borrar el ultimo contenido de la pantalla de la calculadora. Primero verifica que haya al menos un digito y luego remueve el ultimo con el metodo `slice()`

    function removeLastDigit() {
        var screenValue = document.getElementById('screen').value;
        
        if (screenValue.length > 0) {
            var newValue = screenValue.slice(0, -1);
            document.getElementById('screen').value = newValue;
        }
    }

### `calculate()`

La función `calculate()` se ejecuta cuando se presiona el botón de igual (=) en la calculadora. Primero, obtiene el valor actual de la pantalla utilizando `document.getElementById('screen').value`. Luego, utiliza la función `eval()` para evaluar la expresión matemática representada por el valor de la pantalla. El resultado se almacena en la variable `result`. Finalmente, se actualiza el valor de la pantalla con el resultado calculado.

    function calculate() {
        const screenValue = document.getElementById('screen').value;
        const result = eval(screenValue);
        document.getElementById('screen').value = result;
    }


