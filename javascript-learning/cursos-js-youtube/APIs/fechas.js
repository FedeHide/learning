/*
	📌 API para trabajar con fechas 
	Javascript expone su API para que podamos trabajar con fechas.

	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
*/

/*
	📌 Crear un objeto de fecha
	Para poder trabajar con fechas primero tenemos que crear un objeto de fecha.
*/

const fechaActual = new Date(); //fecha actual
const cumpleaños = new Date('1989-09-08T15:00:00') //formato de la fecha

/*
	📌 Metodos para trabajar con fechas
*/
console.log(fechaActual.toString());
console.log(fechaActual.toDateString());
console.log(fechaActual.toTimeString());

// Obtener mes
console.log(fechaActual.getMonth());

// Obtener día
console.log(fechaActual.getDate());

// Obtener año
console.log(fechaActual.getFullYear());