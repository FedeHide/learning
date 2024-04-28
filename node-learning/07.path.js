const path = require('node:path');

// barra separadora de carpetas segun SO
console.log(path.sep);

// unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'test.txt');
console.log(filePath);

// obtener el nombre del archivo de una ruta
const base = path.basename(filePath, '.txt'); // obtiene el nombre del archivo sin la extension

// obtener la extension del archivo
const ext = path.extname(filePath);
console.log(base, ext);