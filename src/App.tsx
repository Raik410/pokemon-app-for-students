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

  console.log(selectedPokemon, "selectedPokemon");

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
          onSelectedPokemon={setSelectedPokemon}
          pokemonsDetails={pokemonsDetails}
        />
      </div>
      <div className="basis-1/2">
        <h2 className="font-bold text-gray-950 text-lg">Pokemon details: </h2>
        <div className="flex flex-col items-center justify-center pt-8">
          {selectedPokemon ? (
            <>
              <p className="text-3xl text-red-800">{selectedPokemon.name}</p>
              <img
                className="w-3/4"
                src={selectedPokemon.sprites?.front_default}
                alt={selectedPokemon.name}
              />
              <p className="text-xl text-red-800">
                Weight pokemon is {selectedPokemon.weight}
              </p>
              <p className="text-xl text-red-800">
                Height pokemon is {selectedPokemon.height}
              </p>
              {selectedPokemon.types === undefined ? (
                <p>Sry type is undefined</p>
              ) : (
                <p className="text-3xl text-red-800">
                  {selectedPokemon.types[0].type?.name}
                </p>
              )}
            </>
          ) : (
            <div>Please select the pokemon</div>
          )}
        </div>
      </div>
      <Counter />
    </main>
  );
}

export default App;
