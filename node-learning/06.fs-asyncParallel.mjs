import { readFile } from 'fs/promises';

Promise.all([
    readFile('holaMundo.txt', 'utf-8'),
    readFile('archivo2.txt', 'utf-8')
]).then(([text, secondText]) => {
    console.log('primer texto:', text)
    console.log('segundo texto:', secondText)
})
