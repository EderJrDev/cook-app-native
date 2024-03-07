import { Image, Pressable, Text } from "react-native";
import { styles } from './styles'

export function Ingredient() {
  return (
    <Pressable style={styles.container}>
      <Image />
      <Text>Maça</Text>
    </Pressable>
  )
}