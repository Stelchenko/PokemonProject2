import React, {FC, useEffect} from "react";
import {View, Text, Image, FlatList, ScrollView} from "react-native";
import {styles} from "./style";
import {DetailsScreenProps} from "./type";
import AbilityCard from "./components/abilityCard";
import TypeCard from "./components/typeCard";
import Svg from "react-native-svg";

const DetailsScreen: FC<DetailsScreenProps> = ({route, navigation}) => {
  const {pokemon} = route.params
  const navigationHandler = (path: string, props: {}) => {
    navigation.push(path, props)
  }
  useEffect(() => navigation.setOptions({title: pokemon.name}), [pokemon.name])
  return (
    <ScrollView contentContainerStyle={styles.scrollScreen} style={styles.screen}>
      <View style={styles.imgContainer}>
        <Image style={styles.img}
               source={{uri: pokemon.image}}/>
      </View>
      <FlatList
        style={styles.typeList}
        data={pokemon.types}
        renderItem={itemData => (
          <TypeCard navigationHandler={navigationHandler} typeName={itemData.item.pokemon_v2_type?.name}/>
        )}
        horizontal={true}
      />
      <Text style={styles.sizeText}>Рост:{pokemon.height ? pokemon.height * 10 : ''} см</Text>
      <Text style={styles.sizeText}>Вес: {pokemon.weight ? pokemon.weight / 10 : ''} кг</Text>
      <Text style={styles.abilityText}>Способности:</Text>
      {pokemon.abilities.map(item => (
        <AbilityCard ability={item.pokemon_v2_ability}/>
      ))}
    </ScrollView>
  )
}

export default DetailsScreen