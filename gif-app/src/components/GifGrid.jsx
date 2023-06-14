
import { GifItem } from "./GifItem";
//import { getGifs } from "../helpers/getGifs"
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category)

    console.log(isLoading)

    return (
        <>
            <h3>{ category }</h3>
           {
            isLoading  && (<h2>Carregando...</h2>)
             
           }
           <div className="card-grid">
            {images.map((image) => {
             return(
                
                  <GifItem key={image.id}
                        {...image}
                        />
             )

            })}
           </div>
        </>
    )
}