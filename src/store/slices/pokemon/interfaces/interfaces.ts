export interface Pokemon {
    name: string,
    url: string
}


export interface PokemonAction {
    isLoading: boolean,
    page: number,
    pokemons: []
}