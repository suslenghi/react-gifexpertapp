import { useState, useEffect } from 'react';
import { getGifs } from '../components/helpers/getGifs';


export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    // Esto permite llamar a la función UNA SOLA VEZ, cuando se renderiza el componente.
    // No peude ser async
    useEffect(() => {
        getGifs(category)
            .then( imgs => {           
                setState({
                    data: imgs,
                    loading: false
                });
            })
    }, []);

    /*
    setTimeout(() => {
        setState({
            data: [1, 2, 3, 4, 5, 6, 7],
            loading: false
        })
    }, 3000);
    */


    return state; // { data:[], loading: true}

}