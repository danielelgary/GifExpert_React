import { GifItem } from "../../src/components/GifItem";
import { render, screen, fireEvent } from '@testing-library/react';

describe('Pruebas del archivo: <GifItem />', () => { 
    
    const title = 'Dragon Ball';
    const url = 'https://prueba.com/'

    test('Match con el Snapshot del componente', () => { 
        const { container } = render( <GifItem title={title} url={url} /> )

        expect( container ).toMatchSnapshot();
     });

     test('Debe mostrar imagen con el URL y ALT indicado', () => { 
        render( <GifItem title={title} url={url} /> );
        screen.debug();

        //Mirar todo lo que trae img o cualquier componente
        console.log(screen.getByRole('img'))

        //Se puede hacer de esta manera
        expect( screen.getByRole('img').src ).toBe(url);
        expect( screen.getByRole('img').alt ).toBe(title);

        //Pero si hay muchos, hacer desestructuracion
        const { src, alt } = screen.getByRole('img');

        expect(src).toBe(url);
        expect(alt).toBe(title);
      });

      test('Titulo se muestra en el componente', () => { 
        render( <GifItem title={title} url={url} /> );

        expect( screen.getByText(title) ).toBeTruthy()
        
       })
 });