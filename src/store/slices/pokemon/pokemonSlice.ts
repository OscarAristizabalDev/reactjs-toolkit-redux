import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        page: 0,
        pokemons: [],
        isLoading: false
    },
    reducers: {
        startLoadingPokemons: (state) => {
            state.isLoading = true
        },
        setPokemons: (state, action: PayloadAction<[]>) => {
            state.pokemons = action.payload
        }
    }
});

// Action creators are generated for each case reducer function
export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;