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
}

export interface PokemonSprite {
  front_default?: string;
}
