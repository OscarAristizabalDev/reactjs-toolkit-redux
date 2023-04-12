import { AppThunk } from "../../store"
import { PokemonAction } from "./interfaces/interfaces";
import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"


// Los thunks es un listado de funciones asyncronas

export const getPokemons = (page: number): AppThunk => {
    return async (dispatch, getState) => {
        dispatch(startLoadingPokemons());

        // Realizar petición HTTP
        // const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`);
        // const data = await respuesta.json();
        // const { results } = data;

        const { data } = await pokemonApi.get(`pokemon?limit=10&offset=${page * 10}`);
        const { results } = data;

        const PokemonAction: PokemonAction = {
            isLoading: false,
            page,
            pokemons: results
        }

        dispatch(setPokemons(PokemonAction));
    }
}

