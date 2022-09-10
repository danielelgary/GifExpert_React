import { GifItem } from "./index";
import { useFetchGifs } from "../hooks/useFetchGifs";



export const GifGrid = ({ category }) => {

    const {images, isLoading} = useFetchGifs( category );
    
    //Se comenta porque en esta clase se convirtio toda esta logica, en 
    //un hook personalizado que hara todo esto y dejara mas limpio el codigo.

    // const [images, setImages] = useState([])

    // const getImages = async() => {
    //     const newImages = await getGifs(category);
    //     setImages(newImages);
    // }

    // //El array vacio quiere decir que solo se dispara cuando se
    // //vuelve a cargar todo el componente.
    // useEffect(() => {    
    //     getImages();
    // }, [])
    
    return (
        <>
            <h3>{category}</h3>

            {
                //Forma 1:
                isLoading ? ( <h2>Cargando... </h2> ) : null
            }
            {
                //Forma 2:
                isLoading && ( <h2>Cargando... </h2> )
            }

            <div className="card-grid">
                {/* Se podria usar asi, sin embargo, se realiza con 
                desestructuracion para que quede mas presentable el codigo
                    {images.map( img => {
                        return <li key={img.id}>{img.title}</li>
                    })}
                */}
                {images.map( (img) => (
                    <GifItem 
                        key={img.id} 
                        { ...img } 
                        />
                    ))}
            </div>
        </>
    )
}
