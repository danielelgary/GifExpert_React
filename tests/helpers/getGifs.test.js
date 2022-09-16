import { getGifs } from "../../src/helpers/getGifs"

describe('Prueba del archivo: getGifs.js', () => { 
    test('getGifs -> Debe recibir una categoria y retornar Arreglo de gifs', async() => { 
        const gifs = await getGifs('One Punch');

        console.log(gifs);

        //Si sabemos el tamaño
        expect(gifs.length).toBe(5);

        //Si no sabemos el tamaño o este es dinamico
        expect(gifs.length).toBeGreaterThan(0);

        //Con esto podemos verificar el arreglo, sin embargo, si alguien
        //daña la funcion y devuelve otro tipo de arreglo, entonces esta
        //comprobacion seria dando SUCCESS, ya que, al fin y al cabo es un arreglo
        //por lo que se recomienda al menos verificar algo de los objetos que trae
        expect(gifs[0]).toEqual(
            {
                id: expect.any( String ),
                title: expect.any( String ),
                url: expect.any( String ),
            }
        );
     })
 })