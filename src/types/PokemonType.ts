export interface IPokemonsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPokemon[];
}

export interface IPokemon {
  name: string;
  url: string;
}

export interface IPokemonResponceDetails {
  name?: string;
  sprites?: PokemonSprite;
  weight?: number;
  height?: number;
  base_experience?: number;
  types?: IPokemonTypes[];
}

export interface IPokemonTypes {
  slot?: number;
  type?: {
    name?: string;
    url?: string;
  }
}

// types
// : 
// Array(1)
// 0
// : 
// slot
// : 
// 1
// type
// : 
// {name: 'fire', url: 'https://pokeapi.co/api/v2/type/10/'}
// [[Prototype]]
// : 
// Object
// length
// : 
// 1
// [[Prototype]]
// : 
// Array(0)

export interface PokemonSprite {
  front_default?: string;
}
