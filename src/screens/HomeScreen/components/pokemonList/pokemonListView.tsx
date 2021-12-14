import React, {FC} from "react";
import {FlatList} from "react-native";
import {styles} from "./style";
import PokemonCard from "../pokemonCard";
import {PokemonListViewProps} from "./type";

const PokemonListView: FC<PokemonListViewProps> = props => {
  const {pokemonsData, loadMore} = props

  return (
    <FlatList
      style={styles.flatList}
      data={pokemonsData.data?.pokemon_v2_pokemon}
      refreshing={pokemonsData.networkStatus === 4}
      keyExtractor={(item) => item.id}
      onRefresh={() => pokemonsData.refetch()}
      columnWrapperStyle={styles.columnWrapper}
      renderItem={itemData => (
        <PokemonCard pokemon={itemData.item}/>
      )}
      numColumns={2}
      onEndReachedThreshold={0.1}
      onEndReached={() => loadMore(pokemonsData)}
    />
  )
}

export default PokemonListView