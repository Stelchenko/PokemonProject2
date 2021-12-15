import React, {FC, useEffect} from "react";
import {View, Text, Image, FlatList} from "react-native";
import {styles} from "./style";
import {DetailsScreenProps} from "./type";
import AbilityCard from "./components/abilityCard";

const DetailsScreen: FC<DetailsScreenProps> = ({route, navigation}) => {
  const {pokemon} = route.params
  useEffect(() => navigation.setOptions({title: pokemon.name}), [])
  return (
    <View style={styles.screen}>
      <View style={styles.imgContainer}>
        <Image style={styles.img}
               source={{uri: pokemon.image}}/>
      </View>

      <Text style={styles.sizeText}>Рост:{pokemon.height * 10} см</Text>
      <Text style={styles.sizeText}>Вес: {pokemon.weight / 10} кг</Text>
      <Text style={styles.abilityText}>Способности:</Text>
      {/*<AbilityCard ability={pokemon.abilities[0].pokemon_v2_ability}></AbilityCard>*/}
      <FlatList
        data={pokemon.abilities}
        renderItem={itemData => (
          <AbilityCard ability={itemData.item.pokemon_v2_ability}/>
        )}
      />

    </View>
  )
}

export default DetailsScreen