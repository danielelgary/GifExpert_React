    
    //peticion GET. No es la forma correcta de hacerlo, pero para efectos de entender
    //lo basico de como funciona.
    export const getGifs = async(category) => {
        
        const url = `https://api.giphy.com/v1/gifs/search?api_key=iys3jbirgNlpPS5ZZEO7PQ20LrorCaRS&q=${category}&limit=5`;
        
        const respuesta = await fetch(url);
        const {data} = await respuesta.json();
        
        const gifs = data.map( img => ({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }));

        return gifs;
    }