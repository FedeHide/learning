describe('Pruebas en <DemoComponent />', () => { 

    
    test('Esta prueba no debe de fallar', () => {
        // 1. arrange
        const message1 = 'Hola mundo';
        
        // 2. act
        const message2 = message1.trim();
        
        // 1. assert
        expect( message1 ).toBe( message2 );
    })
})