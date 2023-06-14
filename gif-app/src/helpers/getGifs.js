
import { GiphyFetch } from "@giphy/js-fetch-api";

export const getGifs = async (category) => {
   
  
    const gf = new GiphyFetch('mkTpF7L6bNqVi9LeHs7P8d65F9PeBtWV')
    const { data: data } = await gf.search( category , { sort: 'relevant', lang: 'es', limit: 5, type: 'stickers' })
    
   
    console.log({category})

   // const url = `api.giphy.com/v1/gifs/search?api_key=mkTpF7L6bNqVi9LeHs7P8d65F9PeBtWV&q=${category}&limit=20`;
  //  const resp = await fetch( url );
   
  //  const { data } = await data.json();
    
    const gifs = data.map( img => {
        return{
            id: img.id,
            title:img.title,
            url: img.images.downsized_medium.url
        }
    });
    console.log(gifs)
    return gifs;
}
