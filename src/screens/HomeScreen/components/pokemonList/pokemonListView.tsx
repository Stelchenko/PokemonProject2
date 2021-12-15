import React, {FC} from "react";
import {FlatList} from "react-native";
import {styles} from "./style";
import PokemonCard from "../pokemonCard";
import {PokemonListViewProps} from "./type";

const PokemonListView: FC<PokemonListViewProps> = props => {
  const {pokemonsData, loadMore, pokemons, navigationHandler} = props

  return (
    <FlatList
      style={styles.flatList}
      data={pokemons}
      refreshing={pokemonsData.networkStatus === 4}
      keyExtractor={(item) => item.id.toString()}
      onRefresh={() => pokemonsData.refetch()}
      columnWrapperStyle={styles.columnWrapper}
      renderItem={itemData => (
        <PokemonCard pokemon={itemData.item} navigationHandler={navigationHandler}/>
      )}
      numColumns={2}
      onEndReachedThreshold={0.1}
      onEndReached={() => loadMore(pokemonsData)}
    />
  )
}

export default PokemonListView