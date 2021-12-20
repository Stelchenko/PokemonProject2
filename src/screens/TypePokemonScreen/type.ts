

export type TypePokemonScreenProps = {
  route: { params: { typeName: string } },
  navigation: {
    navigate: (path: string, props: {}) => void,
    setOptions: (options: {title: string}) => void,
  },
}