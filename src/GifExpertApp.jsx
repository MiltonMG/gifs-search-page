import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = ( newCategory ) => {

        if ( categories.includes(newCategory) )return

        setCategories( [newCategory, ...categories] )
    }


    return (
        <>

            {/* Titulo */}
            <h1>Search Gifs</h1>
        
            {/* Input */}
            <AddCategory 
                // setCategories={setCategories} 
                onNewCategory={ value => onAddCategory(value) }
            />

            {/* Listado de Gif */}
            { 
            categories.map( (category) => (
                <GifGrid key={category} category={category}/>
            ))
            }
            


                {/* Gif Item */}

        </>
    )
}