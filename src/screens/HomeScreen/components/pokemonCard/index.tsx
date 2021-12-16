import React, {FC} from "react";
import {Text} from "react-native";
import {Image} from 'react-native-elements'
import Card from "../../../../components/Card";
import {styles} from "./style";
import {PokemonCardProps} from "./type";
import DefaultActivityIndicator from "../../../../components/activityIndicator";

const PokemonCard: FC<PokemonCardProps> = props => {
  const {pokemon, navigationHandler} = props
  return (
    <Card pokemon={pokemon} navigationHandler={navigationHandler} style={styles.container}>
      <Text>{pokemon.name.toUpperCase()}</Text>
      <Image style={{width: 140, height: 140,}} source={{uri: pokemon.image}} placeholderStyle={styles.placeholder}
             PlaceholderContent={<DefaultActivityIndicator/>}/>


    </Card>


  )
}

export default PokemonCard