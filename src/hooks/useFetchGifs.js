import { useState, useEffect } from "react"
import { getGifts } from "../helpers/getGifts";


export const useFetchGifs = (category) => {

    const [imagenes, setImagenes] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    const mostarImagenes = async () => {
        const imgs = await getGifts(category);
        if (imgs.length > 0) {
            setImagenes(imgs);
            setisLoading(false);
        }
    }

    useEffect(() => {
        mostarImagenes();
    }, []);

    return {
        imagenes,
        isLoading
    }

}
