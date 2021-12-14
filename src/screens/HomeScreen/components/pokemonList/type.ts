import {QueryResult} from "@apollo/client";

export type PokemonListViewProps = {
  pokemonsData: QueryResult,
  loadMore: (item: QueryResult) => void
}