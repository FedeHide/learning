
// Filter

var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "TV", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },
    ]

    var articulosFiltrados = articulos.filter(function(teta){
        return teta.costo <= 500
    });

    articulosFiltrados


// Map


    var articulosFiltrados = articulos.map(function(teta){
        return teta.nombre
    });

    articulosFiltrados


// Find

    var encuentraArticulo = articulos.find(function(teta){
        return teta.nombre === "laptop"
    });

    encuentraArticulo


// forEach

articulos.forEach(function(teta){
    console.log(teta.nombre);
});


// Some

var articulosBaratos = articulos.some(function(teta){
    return teta.costo <= 700;
});

articulosBaratos