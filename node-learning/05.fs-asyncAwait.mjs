import { readFile } from 'node:fs/promises';

console.log('leyendo el primer archivo ...')

const text = await readFile('text1.txt', 'utf-8');
console.log('primer texto:', text)

console.log('--> Hacer cosas mientras lee el archivo ...')

console.log('leyendo el segundo archivo ...')
const secondText = await readFile('text2.txt', 'utf-8');
console.log('segundo texto:', secondText)