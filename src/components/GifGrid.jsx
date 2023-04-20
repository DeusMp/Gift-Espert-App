import { GitfItem } from './GitfItem';
import { useFetchGifs } from '../hooks/useFetchGifs';



export const GifGrid = ({ category }) => {

    const { imagenes, isLoading } = useFetchGifs(category);


    return (
        <div>
            <h2>{category}</h2>
            { isLoading && <h2>Cargando ... </h2>}
            
            <div className="card-grid">
                { isLoading ? <h2>Cargando ... </h2> :
                    imagenes.map((imgs) => (
                        <GitfItem key={imgs.id}
                            {...imgs}
                        />)
                    )}
                {/* OR */}
                {/* {imagenes.map(({ id, title, url }) => (
                    <GitfItem key={id} title={title} url={url}/>
                ) */}
            </div>
        </div>
    )
}
