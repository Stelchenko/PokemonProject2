import React, {FC} from "react";
import {TouchableOpacity} from "react-native";
import {styles} from "./style";
import {CardProps} from "./types";

const Card: FC<CardProps> = props => {
  const {style, navigationHandler, pokemon} = props
  return (
    <TouchableOpacity onPress={() => navigationHandler('Details', {pokemon: pokemon})} style={[styles.card, style]}>{props.children}</TouchableOpacity>
  );
}

export default Card