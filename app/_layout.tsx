import { Slot, Tabs } from "expo-router";
import { StyleSheet, View } from "react-native";
// import { Header } from "./Components/Header";
// import { Footer } from "./Components/Footer";

//Root layout
export default function RootLayout() {
  return <Tabs />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
