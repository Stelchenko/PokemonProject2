import {QueryResult} from "@apollo/client";
import {PokemonListItem} from "../../../../types/pokemon";

export type PokemonListViewProps = {
  pokemonsData: QueryResult,
  loadMore: (item: QueryResult) => void,
  pokemons: PokemonListItem[],
  navigationHandler: (path: string, props: {}) => void,
}

export type PokemonListProps = {
  navigationHandler: (path: string, props: {}) => void,
  typeName?: string
}