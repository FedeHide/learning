const fs = require('node:fs')

const stats = fs.statSync('./holaMundo.txt')

console.log(
    `File: ${stats.isFile()} -`,
    `Directory: ${stats.isDirectory()} -`,
    `S. Link: ${stats.isSymbolicLink()} -`,
    `Size: ${stats.size}`,
)