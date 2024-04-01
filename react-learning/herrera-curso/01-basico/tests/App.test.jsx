import { App } from "../src/App"
import { render } from "@testing-library/react"

describe('Pruebas en <App />', () => { 

    // test('debe hacer match con el snapshot', () => { 

    //     const title = 'Hola, soy goku';
    //     const { container } = render( <App title={title} /> );

    //     expect( container ).toMatchSnapshot() 
    // })

    test('debe de mostrar el titulo en un h1', () => { 

        const title = 'Hola, soy goku';
        const { container, getByText, getByTestId } = render( <App title={title} /> );
        expect( getByText(title) ).toBeTruthy();

        const h1 = container.querySelector('h1');
        expect( h1.innerHTML ).toContain(title)

        expect( getByTestId('test-title').innerHTML ).toContain(title);

    })

    test('debe de mostrar el subtitulo enviado por props', () => { 

        const title = 'Hola, soy goku';
        const subTitle = 'Soy un subtitulo';
        const { getAllByText } = render( 
            <App 
                title={title} 
                subTitle={subTitle}
            /> 
        );
        expect( getAllByText(subTitle).length ).toBe(1);
    })
})