import { ScrollView, View, Text, StyleSheet } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export default function HomePage() {
  const inset = useSafeAreaInsets();

  return (
    <SafeAreaView style={[styles.container, { paddingTop: inset.top }]}>
      <ScrollView contentContainerStyle={styles.container}>
        <View>
          <Text>Account Screen</Text>
        </View>
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
});
