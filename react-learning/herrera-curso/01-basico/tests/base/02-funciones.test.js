import { getActiveUser, getUser } from "../../src/base/02-funciones"

describe('Pruebas en 02-funciones', () => { 

    test('getUser debe de retornar un objeto', () => { 
        const testUser = {
            uid: 'ABC123',
            username: 'El_Rukito1502'
        };

        const user = getUser();

        expect(testUser).toStrictEqual(user)
    });

    test('getActiveUser debe de retornar un objeto', () => { 

        const name = 'Goku';

        const activeUser = getActiveUser(name);

        const testActiveUser = {
            uid: 'ABC567',
            username: name
        }

        expect(activeUser).toEqual(testActiveUser)

    })
})