import { renderHook, waitFor } from '@testing-library/react'
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Prueba al archivo: useFetchGifs', () => { 
    
    test('Debe regresar el estado inicial', () => { 
        const { result } = renderHook( () => useFetchGifs('Dragon Ball') );
        const { images, isLoading } = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();

    });

    test('Debe retornar arreglo de imagenes y isLoading en false', async() => { 
        const { result } = renderHook( () => useFetchGifs('Dragon Ball') );
        
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        );

        const { images, isLoading } = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();

    });
 });