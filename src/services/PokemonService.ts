const pokemonUrl = 'https://pokeapi.co/api/v2/pokemon';

export const PokemonService = {
  getPokemons: async () => {
    const responce = await fetch(pokemonUrl)
    const pokemons = await responce.json();

    return pokemons;
  }
}