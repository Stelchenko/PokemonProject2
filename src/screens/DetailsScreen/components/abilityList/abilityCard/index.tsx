import React, {FC} from "react";
import {View, Text} from "react-native";
import {styles} from "./style";
import {AbilityCardProps} from "./type";

const AbilityCard: FC<AbilityCardProps> = props => {
  const {ability} = props
  return (
    <View style={styles.container}>
      <Text style={styles.abilityName}>{ability?.name}</Text>
      <Text style={styles.abilityDescription}>{ability?.pokemon_v2_abilityeffecttexts[0].effect}</Text>
    </View>
  )
}

export default AbilityCard