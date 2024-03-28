import { retornoArr } from "../../src/base/04-deses-arr"

describe('Pruebas en 04-deses-arr', () => { 

    test('debe retornar un string y un numero', () => { 

        const [letters, numbers] = retornoArr();

        expect(letters).toBe('ABC')
        expect(numbers).toBe(123)

        expect(typeof letters).toBe('string')
        expect(typeof numbers).toBe('number')

        expect(letters).toEqual( expect.any(String));

    })
})