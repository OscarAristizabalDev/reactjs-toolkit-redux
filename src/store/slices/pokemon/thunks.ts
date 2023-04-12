import { AnyAction, Dispatch, ThunkAction, createSlice } from "@reduxjs/toolkit"

import { AppThunk, RootState } from "../../store"
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"


// Los thunks es un listado de funciones asyncronas

export const getPokemons = (page: number): AppThunk => {
    return async (dispatch, getState) => {
        dispatch(startLoadingPokemons());

        // Realizar petición HTTP

        //dispatch(setPokemons([]));
    }
}

