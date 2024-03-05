import { ScrollView, View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HeaderComponent } from "../Components/Header";
import { router } from "expo-router";

export default function ProductsDetailsPage() {
  return (
    <SafeAreaView style={[styles.container]}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <HeaderComponent canGoBack={router.canGoBack()} onPress={router.back} />
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
  scrollContainer: {
    width: "100%",
  },
});
