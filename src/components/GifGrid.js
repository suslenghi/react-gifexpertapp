import React, { useState, useEffect } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

import { getGifs } from './helpers/getGifs';

export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([])

    const { data:images, loading } = useFetchGifs(category);

    // El category, es para que vuelva a llamar la funcion si cambia el category. EN este caso
    // No cambia nunca.

    // useEffect(() => {
    //     getGifs(category)
    //         .then(setImages)
    // }, [category]);

    // Esta verga se llama cada vez que cambias algo. No es eficiente.
    // Usamos useEffect
    // getGifs();

    return (
        <>
            <h3 className='animate__animated animate__slideInDown'>{category}</h3>
{/* 
            { loading && <p>Loading</p> } */}

            <div className='card-grid'>
                {
                    images.map(img =>
                        <GifGridItem
                            key={img.id}
                            // {...img}
                            {...img}
                        />
                    )
                }
            </div>
        </>
    )

}
