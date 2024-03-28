const gatito = {
    clave: 'El_Ruko',
    nombre: 'ruki',
    edad: 3
}

export const context = ({clave, nombre, edad, rango = 'Capitan'}) => {
    
    return {
        userName: nombre,
        range: rango,
        anios: edad,
        nombreClave: clave,
        latlng: {
            lat: 14.1235,
            lng: -12.3242
        }
    }
}


const { nombreClave, userName, range, anios, latlng: { lat, lng } } = context(gatito)
const ruki = context(gatito)

console.log(nombreClave, userName, range, anios, lat, lng)
console.log(ruki)

