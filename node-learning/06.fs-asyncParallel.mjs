import { readFile } from 'fs/promises';

Promise.all([
    readFile('text1.txt', 'utf-8'),
    readFile('text2.txt', 'utf-8')
]).then(([text, secondText]) => {
    console.log('primer texto:', text)
    console.log('segundo texto:', secondText)
})
