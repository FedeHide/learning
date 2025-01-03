const os = require('node:os')

console.log('Informacion del sistema operativo:')
console.log('-----------------------')

console.log('Nombre del sistema operativo:', os.platform())
console.log('Version:', os.release())
console.log('Arquitectura:', os.arch())
console.log('CPUs:', os.cpus())
console.log('Memoria libre:', (os.freemem() / 1024 / 1024).toFixed(0),'gb')
console.log('Memoria total:', (os.totalmem() / 1024 / 1024).toFixed(0), 'gb')
console.log('Uptime:', os.uptime() / 60 / 60, 'hs')