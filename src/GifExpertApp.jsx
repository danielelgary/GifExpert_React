import { useState } from "react";
//Cuando se pone una ruta que posee un index, toma este por defecto
//sino se especifica
import { AddCategories, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball']);

    const onAddCategory = (newCategory) => {
        //Si ya pertenece al arreglo de categories, retorna y no actualiza nada.
        
        if (categories.some(x => x.toLowerCase() === newCategory.toLowerCase())) return;

        //setCategories([...categories, 'Nuevo valor']);
        setCategories([newCategory, ...categories]);
    }

  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategories 
            //setCategories={setCategories}
            onNewCategory={ onAddCategory }
        />

        {
            categories.map( category => (
                <GifGrid key={category} category={category}/> 
                ))
        }
    </>
  )
}
