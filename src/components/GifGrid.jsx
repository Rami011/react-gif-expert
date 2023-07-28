
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {
    
    const { images, IsLoading} = useFetchGifs( category);
    
    return (
        <>
            <h3>{category}</h3>
            {
                IsLoading && (<h2>Cargando...</h2>)
            }

            <div className="card-grid">
                {
                    images.map((images) => (
                        <GifItem 
                            key={ images.id }
                            { ...images }
                            
                        
                        />
                    ))
                }
                
            </div>
        </>
    )
}
