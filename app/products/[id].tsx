import { useState } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HeaderComponent } from "../Components/Header";
import { router, useLocalSearchParams } from "expo-router";
import { ProductItem } from "../Components/Product";

export default function ProductsDetailsPage() {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [isExpanded, setIsExpanded] = useState<Boolean>(false);

  const { item, id } = useLocalSearchParams();

  if (!item) {
    return (
      <View>
        <Text style={styles.text}>Oops! Something went wrong</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={[styles.container]}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <HeaderComponent canGoBack={router.canGoBack()} onPress={router.back} />
        <ProductItem
          item={item}
          activeSlide={activeSlide}
          setActiveSlide={setActiveSlide}
          isExpanded={isExpanded}
          setIsExpanded={setIsExpanded}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    minHeight: "100%",
  },

  text: {
    color: "#151515",
    fontFamily: "Poppins-Regular",
    fontWeight: "500",
    fontSize: 14,
  },

  scrollContainer: {
    width: "100%",
  },
});
