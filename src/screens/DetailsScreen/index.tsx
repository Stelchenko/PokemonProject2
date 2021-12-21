import React, {FC, useEffect} from "react";
import {View, Text, Image,  ScrollView} from "react-native";
import {styles} from "./style";
import {DetailsScreenProps} from "./type";
import TypeList from "./components/typeList";
import AbilityList from "./components/abilityList";

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
      <TypeList navigationHandler={navigationHandler} id={pokemon.id}/>
      <Text style={styles.sizeText}>Рост:{pokemon.height ? pokemon.height * 10 : ''} см</Text>
      <Text style={styles.sizeText}>Вес: {pokemon.weight ? pokemon.weight / 10 : ''} кг</Text>

      {/*<Text style={styles.abilityText}>Способности:</Text>*/}
      <AbilityList id={pokemon.id}/>
    </ScrollView>
  )
}

export default DetailsScreen