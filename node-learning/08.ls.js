const fs = require('node:fs');

fs.readdir('.', (err, files) => { // --> SIEMPRE el primer parametro es el error
    if (err) {
        console.log('Error al leer el directorio: ', err);
        return;
    } 

    files.forEach((file) => {
        console.log(file);
    });
});