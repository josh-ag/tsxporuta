import { useState } from "react";
import { Alert, ScrollView, StyleSheet } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { HeaderComponent } from "../Components/Header";
import { SearchComponent } from "../Components/SearchComponent";

export default function MenuPage() {
  const inset = useSafeAreaInsets();
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearch = async () => {
    //implement search
    if (!searchTerm) return Alert.alert("Please enter a search term");

    Alert.alert("Searching for: " + searchTerm);
  };

  return (
    <SafeAreaView style={[styles.container, { paddingTop: inset.top }]}>
      <ScrollView contentContainerStyle={styles.container}>
        <HeaderComponent canGoBack={false} label="Menu" />
        <SearchComponent
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onPress={handleSearch}
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
    width: "100%",
  },
});
