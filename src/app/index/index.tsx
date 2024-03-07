import { ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import { Ingredient } from "@/components/Ingredient";

export default function Index() {
  const 
  return(
    <View style={styles.container}>
      <Text style={styles.title}>
        Escolha{"\n"}<Text style={styles.subtitle}>os produtos</Text>
      </Text>
      <Text style={styles.message}>
        Descubra receitas baseadas nos produtos que você escolheu.
      </Text>

      <ScrollView contentContainerStyle={styles.ingredients} showsVerticalScrollIndicator= {false}>
        {Array.from({length: 100}).map((item, index) => (
          <Ingredient key={index} />
        ))}
      
      </ScrollView>
    </View>
  )
}