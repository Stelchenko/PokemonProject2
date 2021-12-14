import React, {FC} from "react";
import {View} from "react-native";
import {styles} from "./style";
import {CardProps} from "./types";

const Card: FC<CardProps> = props => {
  const {style} = props
  return (
    <View style={[styles.card, style]}>{props.children}</View>
  );
}

export default Card