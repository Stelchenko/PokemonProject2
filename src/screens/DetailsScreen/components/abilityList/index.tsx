import React, {FC} from "react";
import AbilityCard from "./abilityCard";
import {useGetAbilitiesQuery} from "../../../../queries/pokemonList/__generated__/pokemonQuery";
import {AbilityListProps} from "./type";
import {Pokemon_V2_Ability} from "../../../../__generated__/types";

const AbilityList: FC<AbilityListProps> = props => {
  const {id} = props
  const typesData = useGetAbilitiesQuery({variables: {id: id}, fetchPolicy: "network-only"})

  return(
    <>
    {typesData.data?.pokemon_v2_pokemon[0].pokemon_v2_pokemonabilities.map(item => (
        <AbilityCard ability={item.pokemon_v2_ability as Pokemon_V2_Ability}/>
      ))}
    </>
  )
}

export default AbilityList