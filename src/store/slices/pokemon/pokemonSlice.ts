import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { PokemonAction } from './interfaces/interfaces';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        page: 0,
        pokemons: [],
        isLoading: false
    },
    reducers: {
        startLoadingPokemons: (state) => {
            state.isLoading = true;
        },
        setPokemons: (state, action: PayloadAction<PokemonAction>) => {
            state.isLoading = false;
            state.page = action.payload.page + 1;
            state.pokemons = action.payload.pokemons;
        }
    }
});

// Action creators are generated for each case reducer function
export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;