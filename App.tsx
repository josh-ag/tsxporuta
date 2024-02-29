import { StatusBar } from "expo-status-bar";

import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={[styles.containerContent]}>
        <Text>Main Screen</Text>
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F9F9F9" },
  containerContent: { paddingTop: 56 },
});
