import { FC } from "react";
import { IPokemonResponceDetails } from "../types/PokemonType";
import PokemonItem from "./PokemonItem";

interface IPokemons {
  pokemonsDetails: IPokemonResponceDetails[];
  onSelectedPokemon: (pokemon: IPokemonResponceDetails) => void;
}

const Pokemons: FC<IPokemons> = ({ pokemonsDetails, onSelectedPokemon }) => {
  return (
    <ul className="grid grid-cols-[1fr_1fr] gap-4">
      {pokemonsDetails.map((pokemon) => (
        <PokemonItem onSelectedPokemon={onSelectedPokemon} key={pokemon.name} pokemon={pokemon} />
      ))}
    </ul>
  );
};

export default Pokemons;
