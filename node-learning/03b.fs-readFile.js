const fs = require('node:fs');

console.log('Leyendo el primer archivo...')
fs.readFile('./holaMundo.txt', 'utf-8', (err, text) => {  //  <-- ejecutas este callback, readFile es asyncrono
    console.log('primer texto:', text)
});

console.log('--> Hacer cosas mientras lee el archivo')


console.log('Leyendo el segundo archivo...')
fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
    console.log('segundo texto:',text)
});

// No podemos saber en que orden llegan los callbacks
