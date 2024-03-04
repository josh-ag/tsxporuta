import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

export  default function ProductDetails(){

  const inset = useSafeAreaInsets();

  return <SafeAreaView>
    <ScrollView style={[styles.container, {paddingTop: inset.top}]}>>
      <View>
        <Text>Product Details Here</Text>
      </View>
    </ScrollView>
  </SafeAreaView>
}

// @styles 
const styles =  StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#fff',
  }
})