import React, {FC} from "react";
import {styles} from "./style";
import TypeCard from "./typeCard";
import {FlatList, Text} from "react-native";
import {useGetTypesQuery} from "../../../../queries/pokemonList/__generated__/pokemonQuery";
import {TypeListProps} from "./type";

const TypeList: FC<TypeListProps> = props => {
  const {navigationHandler, id} = props

  const typesData = useGetTypesQuery({variables: {id: id}, fetchPolicy: "network-only"})
  //if (typesData.loading) return <Text>Loading</Text>
  if (typesData.error) return <Text>ERROR!</Text>
  return (
    <FlatList
      style={styles.typeList}
      data={typesData.data?.pokemon_v2_pokemon[0].pokemon_v2_pokemontypes}
      renderItem={itemData => (
        <TypeCard navigationHandler={navigationHandler} typeName={itemData.item.pokemon_v2_type?.name}/>
      )}
      horizontal={true}
    />
  )
}

export default TypeList