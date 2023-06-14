import { useState } from "react"
import { AddCategory, GifGrid } from "./components"
 
export const GifExpertApp = () => {

    const [ categories, setCategories] = useState(['One Punche', 'Dragon Ball'])

    const onAddCategory = ( newCategory ) => {
      if(categories.includes(newCategory)) return;  
      setCategories([newCategory, ...categories])
    }

    return(
        <>
            <h1>Gif Expert App</h1>
            <AddCategory 
              //  setCategories={ setCategories }
              onNewCategory = {event => onAddCategory(event)}
           />
                     
                { categories.map( ( category ) => {
                    return (
                            <GifGrid 
                            key={category}
                            category={ category }/>
                           )
                         })
                 }
            
        </>
    )
}