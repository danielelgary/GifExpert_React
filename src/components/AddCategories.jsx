import { useState } from 'react'

export const AddCategories = ({ onNewCategory }) => {

    //Cada componente puede tener sus propios estados
    //manejara sus propios HOOKS para manejar el estado de los elementos propios
    const [inputValue, setInputValue] = useState('');
    const onInputChange = ({ target }) => {
        //El parametro de entrada {target} es la desestructuracion del evento
        //que se lanza desde el onChange (ChangeEventHandler) y el cual 
        //trae la info del valor que detecta que cambio.
        setInputValue(target.value);
    };

    const onSubmit = ( event ) => {
        //previene el full refresh de la pagina
        event.preventDefault();
        if (inputValue.trim().length < 1) return;

        //setCategories(categorias => [inputValue, ...categorias ]);
        onNewCategory( inputValue.trim() );
        setInputValue('');
    }


    return (
        //El comportamiento por defecto es que cuando se presiona enter 
        //haga un full refresh al formulario y trate de enviar los datos
        //para evitarlo, se usa el evento onSubmit 
        //y se maneja con un event.preventDefault
        <form onSubmit={onSubmit}>
            <input type={'text'} placeholder='Buscar Gif' value={inputValue} onChange={ onInputChange }/>

        </form>
    )
}