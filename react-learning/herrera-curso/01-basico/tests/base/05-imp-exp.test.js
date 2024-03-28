import { getHeroesById, getHeroesByOwner } from "../../src/base/05-imp-exp";

describe('Pruebas en 05-imp-exp', () => { 

    test('getHeroesById debe de retornar un heroes por ID', () => { 

        const id = 1;
        const hero = getHeroesById(id)

        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
    });

    test('getHeroesById debe de retornar undefined si no existe', () => { 

        const id = 100;
        const hero = getHeroesById(id)

        expect(hero).toBeFalsy()
    });

    test('getHeroesByOwner debe retornar un arreglo, length === 3 con los heroes de DC', () => { 

        const owner = 'DC';
        const heroes = getHeroesByOwner(owner)

        expect(heroes.length).toBe(3)
        expect(heroes).toEqual(
            [
                { id: 1, name: 'Batman', owner: 'DC' },
                { id: 3, name: 'Superman', owner: 'DC' },
                { id: 4, name: 'Flash', owner: 'DC' }
            ]
        )
    });

    test('getHeroesByOwner debe retornar un arreglo, length === 2 con los heroes de Marvel', () => { 

        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner)

        expect(heroes.length).toBe(2)

    });
})