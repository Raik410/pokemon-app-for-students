import { FC } from "react";
import { IPokemon } from "../types/PokemonType";
import PokemonItem from "./PokemonItem";

interface IPokemons {
  pokemons: IPokemon[];
}

const Pokemons: FC<IPokemons> = ({ pokemons }) => {
  return (
    <ul className="grid grid-cols-[1fr_1fr] gap-4">
      {pokemons.map((pokemon) => (
        <PokemonItem
          key={pokemon.name}
          pokemon={pokemon}
        />
      ))}
    </ul>
  );
};

export default Pokemons;
