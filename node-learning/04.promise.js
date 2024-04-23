const fs = require('node:fs/promises');  // --> en lugar de utilizar callbacks, utilizamos promesas

console.log('Leyendo el primer archivo...')

fs.readFile('./holaMundo.txt', 'utf-8')
    .then(text => {
        console.log('primer texto:', text)
    });

console.log('--> Hacer cosas mientras lee el archivo ...')

console.log('Leyendo el segundo archivo...')

fs.readFile('./archivo2.txt', 'utf-8')
    .then(text => {
        console.log('segundo texto:', text)
    });