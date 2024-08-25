

// CLASES

class Usuario { // definicion
    tipo = 'usuario';  // propiedades: puede contener variables, que dentro de la clase se llaman propiedades.

    constructor (nombre, apellido) {  // constructor: es una metodo para inicializar un objeto creado a partir de una clase.
        this.nombre = nombre;  // accede a la propiedad nombre, si no existe la crea y guarda el valor que le pasan en el argumento.
        this.apellido = apellido;  //this hace referencia a la propia clase

        console.log('Nuevo usuario registrado!');
    }

    obtenerNombreCompleto() {  // metodos: la clase puede contener funciones, se llaman metodos
        console.log('Obteniendo datos...');
        return `${this.nombre} ${this.apellido}`;
    }
}


class Moderador extends Usuario { // extends: clase extiende de la super clase, heredando todas sus propiedades y metodos.
    static registrados = 1000; //creamos una propiedad estatica para poder acceder a ella sin necesidad de crear un objeto

    constructor (nombre, apellido, permisos) {
        super(nombre, apellido);  // super: hereda las propiedades creadas por la super clase
        this.permisos = permisos;
    }

    borrarPost(id) {
        if (this.permisos.includes('borrar')) { // includes: propiedad para determinar si existe un valor.
            console.log(`El post con el id ${id} ha sido borrado`);
        }
    }

    static borrar(id) {
        console.log(`El usuario con el id ${id} ha sido borrado de la base de datos.`)  // creamos un metodo estatico para no tener que crear un objeto al utilizarlo
    }
}

const usuario = new Usuario ('Ruki', 'El Purris');  //creando una nueva instancia de la clase Usuario
console.log(usuario.obtenerNombreCompleto());

const moderador = new Moderador ('Anya', 'La Nena', ['editar', 'borrar']);

Moderador.borrar(1); //utilizamos el metodo estatico referenciando la clase
console.log(Moderador.registrados); //accedemos a la propiedad 