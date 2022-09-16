import { render, screen, fireEvent } from '@testing-library/react'
import { GifGrid } from '../../src/components';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

/*
    Se crea el mock el cual en este caso es del hook que se realizo de manera
    personalizada para la aplicacion y su necesidad.
    Se puede hacer MOCK de cualquier HOOK
*/
jest.mock('../../src/hooks/useFetchGifs')

describe('Pruebas en el archivo: <GifGrid />', () => { 

    const category = "Dragon Ball";

    test('Debe mostrar el loading inicialmente', () => { 
        
        /*
            Como el mock se esta simulando, se le debe decir que estado tendra
            en la ejecucion de este test y de todos los test que usen este MOCK.
            en este caso seria el estado inicial del componente el que se quiere
            evaluar, por lo que el HOOK se carga con los estado iniciales que
            deberia tener al llamar al componente.
        */
        useFetchGifs.mockReturnValue(
            {
                images: [],
                isLoading: true
            }
        );

        render(<GifGrid category={category} />);
        //screen.debug();

        expect( screen.getByText('Cargando...')).toBeTruthy();
        expect( screen.getByText(category)).toBeTruthy();
     });

     test('Debe mostrar el loading inicialmente', () => { 
        
        const gifs = [
            {
                id: 'ABC',
                title: 'Dragon Ball ABC',
                url: 'https://pruebaABC.com'
            },
            {
                id: '123',
                title: 'Dragon Ball 123',
                url: 'https://prueba123.com'
            }
        ]

        useFetchGifs.mockReturnValue(
            {
                images: gifs,
                isLoading: false
            }
        );

        render(<GifGrid category={category} />);
        //screen.debug();

        expect( screen.getAllByRole('img').length ).toBe(2);
     });

 }); 