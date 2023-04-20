import { useState } from "react";
import { AddCategory, GifGrid } from "./components";



export const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(['Spiderman']);

    const onAddCategory = (nuevaCategoria) => {
        if (categorias.includes(nuevaCategoria)) return;
        
        setCategorias(cat => [...cat, nuevaCategoria]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                onNewCategory={ onAddCategory }
                // onNewCategory={valor => onAddCategory(valor)}
            />
            {
                categorias.map((cat, i) => (
                    <GifGrid key={cat} category={cat} />
                ))
            }
        </>
    )
}
