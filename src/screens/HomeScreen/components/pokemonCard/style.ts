import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 10,
    width: '45%',
    aspectRatio: 150/132,
    flexDirection: 'column',
    justifyContent: "space-between",
    borderRadius: 300
  },
  name: {
    fontWeight: "700"
  },
  placeholder: {
    backgroundColor: 'white',
    width: 50,
    height: 50,
    position: "absolute",
    left: '30%'
  }
})