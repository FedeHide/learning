import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

// const apiKey = 'wbKtOeUWEAFSbFTaGFj31VH3F696lKZz';

export default function GifExpertApp() {

    const [categories, setCategories] = useState([ 'One Puch', 'Dragon Ball' ]);

    const onAddCategory = () => {
        setCategories([ ...categories, 'Pokemon' ])
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory categories={categories} setCategories={setCategories} />

            <button onClick={onAddCategory}>Agregar</button>

            <ol>
                { categories.map( category => {
                    return <li key={ category }>{ category }</li>
                }) }
            </ol>
        </>
    )
}