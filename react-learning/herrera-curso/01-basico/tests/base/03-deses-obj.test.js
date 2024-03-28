import { context } from "../../src/base/03-deses-obj"

describe('Pruebas en 03-deses-obj', () => { 

    test('context debe retornar un objeto', () => { 

        const anya = {
            clave: 'La_Nena',
            nombre: 'Anya',
            edad: 1,
            rango: 'Teniente'
        }

        const catContext = context(anya)

        const { nombreClave, userName, anios, range, latlng: { lat, lng } } = catContext

        const testGatito = {
            nombreClave: nombreClave,
            userName: userName,
            anios: anios,
            range: range,
            latlng: {
                lat: 14.1235,
                lng: -12.3242
            }
        }

        expect(testGatito).toEqual(catContext)
        console.log(nombreClave, userName, range, anios, lat, lng)
    })
})