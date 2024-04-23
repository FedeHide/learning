const fs = require('node:fs');

console.log('Leyendo el primer archivo...')
const text = fs.readFileSync('./text1.txt', 'utf-8');

console.log(text)

console.log('Leyendo el segundo archivo...')
const secondText = fs.readFileSync('./text2.txt', 'utf-8');

console.log(secondText)