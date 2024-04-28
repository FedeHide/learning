// argumentos de entrada
console.log(process.argv);

// podemos controlar eventos del proceso
process.on('exit', () => {})

// current working directory
console.log(process.cwd()); // --> desde que carpeta estamos ejecutando el proceso

// platform
console.log(process.env); // --> variables de entorno

//controlar el proceso y su salida
process.exit(0); // --> termina el proceso: 0 -> todo bien, 1 -> error