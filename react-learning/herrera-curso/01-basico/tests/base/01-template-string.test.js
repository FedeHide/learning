import { getSaludo } from "../../src/base/01-template-string";
/* eslint-disable */
describe('Pruebas en 01-template-string', () => { 
    test('getSaludo debe de retornar "Hola Goku"', () => {
        const name = 'Goku';
        const message = getSaludo( name );

        expect( message ).toBe(`Hola ${name}`)
    })
})