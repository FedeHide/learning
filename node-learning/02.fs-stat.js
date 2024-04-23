const fs = require('node:fs')

const stats = fs.statSync('./text1.txt')

console.log(
    `File: ${stats.isFile()} -`,
    `Directory: ${stats.isDirectory()} -`,
    `S. Link: ${stats.isSymbolicLink()} -`,
    `Size: ${stats.size}`,
)