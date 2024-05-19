import { useEffect, useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Pokemons from "./components/Pokemons";
import { PokemonService } from "./services/PokemonService";
import {
  IPokemon,
  IPokemonResponceDetails,
  IPokemonsResponse,
} from "./types/PokemonType";

function App() {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [pokemonsDetails, setPokemonsDetails] = useState<
    IPokemonResponceDetails[]
  >([]);
  const [selectedPokemon, setSelectedPokemon] =
    useState<IPokemonResponceDetails | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const pokemons: IPokemonsResponse = await PokemonService.getPokemons();
      setPokemons(pokemons.results);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchDetailsPokemons = async () => {
      const pokemonResponceDetail: IPokemonResponceDetails[] =
        await Promise.all(
          pokemons.map(async (pokemon) => {
            const data = await fetch(pokemon.url);
            return await data.json();
          })
        );
      setPokemonsDetails(pokemonResponceDetail);
    };

    fetchDetailsPokemons();
  }, [pokemons]);

  return (
    <main className="flex flex-row">
      <div className="basis-1/2">
        <h2 className="font-bold text-gray-950 text-lg">Pokemons: </h2>
        <Pokemons
          pokemons={pokemons}
        />
      </div>
      <div className="basis-1/2">
        <h2 className="font-bold text-gray-950 text-lg">Pokemon details: </h2>
      </div>
      <Counter />
    </main>
  );
}

export default App;
