
import {PokemonListItem, PokemonQueryItem} from "../types/pokemon";
import {IMG_API} from "../../api/pokemonImage";

export function mapPokemonList(draftPokemonList: PokemonQueryItem[] | undefined): PokemonListItem[] {
  if (draftPokemonList) {
    return draftPokemonList.map((item) => ({
      id: item.id,
      name: item.name,
      height: item.height,
      weight: item.weight,
      image: convertIdToSrc(item.id),
      abilities: item.pokemon_v2_pokemonabilities
    }))
  }
  else return []
}

function convertIdToSrc(id: number): string {
  let zero = '';
  if (id < 10) {
    zero = '00';
  } else if (id < 100) {
    zero = '0';
  }
  return IMG_API + zero + id + '.png';
}