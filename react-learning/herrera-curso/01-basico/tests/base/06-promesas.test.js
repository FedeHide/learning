import { getHeroeByIdAsync } from "../../src/base/06-promesas";

describe('Pruebas en  06-promesas', () => { 

    test('getHeroesByIdAsync debe de retornar un heroe', (done) => { 

        
        const id = 1;
        getHeroeByIdAsync( id )
            .then( hero => {
                    expect( hero ).toEqual({
                        id: 1,
                        name: 'Batman',
                        owner: 'DC'
                    });
                done()
            })
    })

    test('getHeroesByIdAsync debe de obtener un error si el heroe no existe', (done) => { 

        
        const id = 100;
        getHeroeByIdAsync( id )
            .then( hero => {
                expect(hero).toBeFalsy();
                done()
            })
            .catch( error => {
                
                expect(error).toBe(`No se pudo encontrar el heroe con el id: ${id}`)

                done()
            })
    })
})