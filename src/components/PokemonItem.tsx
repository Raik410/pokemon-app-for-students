import { FC } from "react";
import { IPokemon } from "../types/PokemonType";

interface IPokemonItem {
  pokemon: IPokemon;
}

const PokemonItem: FC<IPokemonItem> = ({ pokemon }) => {
  return (
    <li className="bg-green-400 rounded-md overflow-hidden p-5">
      <h2 className="">{pokemon.name}</h2>
      <a href={pokemon.url}>{pokemon.url}</a>
    </li>
  );
};

export default PokemonItem;
