import { useEffect } from "react"
import { useSelector } from "react-redux"

import { getPokemons } from "./store/slices/pokemon";
import { RootState, useAppDispatch } from "./store";

export const PokemonApp = () => {

    // el hook useSelector de react-redux permite leer datos del store
    const { page } = useSelector((state: RootState) => state.pokemons);
    // con useDispath puedo ejecutar cual acción
    const dispatch = useAppDispatch();

    // el useEffect permite ejecutar las funciones despues de renderizar, en este caso ejecutar el dispatch
    useEffect(() => {
        dispatch(getPokemons(0)); 
    }, [])


    return (
        <>
            <h1>PokemonApp</h1>
            <hr />
            <ul>
                <li>Hola</li>
            </ul>
        </>
    )
}
