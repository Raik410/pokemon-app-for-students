import { FC } from "react";
import { IPokemonResponceDetails } from "../types/PokemonType";

interface IPokemonItem {
  pokemon: IPokemonResponceDetails;
  onSelectedPokemon: (pokemon: IPokemonResponceDetails) => void;
}

const PokemonItem: FC<IPokemonItem> = ({ pokemon, onSelectedPokemon }) => {
  return (
    <li onClick={() => onSelectedPokemon(pokemon)} className="bg-green-400 rounded-md overflow-hidden p-5">
      <h2 className="">{pokemon.name}</h2>
      {/* <a href={pokemon.url}>{pokemon.url}</a> */}
      <img src={pokemon.sprites?.front_default} alt={pokemon.name} />
    </li>
  );
};

export default PokemonItem;
