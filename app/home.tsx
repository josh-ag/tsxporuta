import { ScrollView, View, Text, StyleSheet } from "react-native";

export default function HomePage() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Text>Home Screen</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    minHeight: "100%",
  },
});
