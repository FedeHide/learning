const fs = require('node:fs');

console.log('Leyendo el primer archivo...')
fs.readFile('./text1.txt', 'utf-8', (err, text) => {  //  <-- ejecutas este callback cuando se completa una tarea asincrona, readFile es asyncrono
    console.log('primer texto:', text)
});

console.log('--> Hacer cosas mientras lee el archivo')


console.log('Leyendo el segundo archivo...')
fs.readFile('./text2.txt', 'utf-8', (err, text) => {
    console.log('segundo texto:',text)
});

// No podemos saber en que orden llegan los callbacks

