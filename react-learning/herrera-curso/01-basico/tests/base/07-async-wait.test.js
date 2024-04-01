import { getImage } from "../../src/base/07-async-wait"

describe('Pruebas en 07-async-wait', () => { 

    test('getImagen debe de retornar un URL de la imagen', async () => { 

        const url = await getImage();
        
        expect(typeof url).toBe('string')
    })
})