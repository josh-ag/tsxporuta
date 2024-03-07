import { useContext, useState } from "react";
import { Alert, ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HeaderComponent } from "../Components/Header";
import { SearchComponent } from "../Components/SearchComponent";
import { MenuItem } from "../Components/MenuItem";
import { AppContext } from "../../context/appContext";
import { MenuType } from "../../type";

export default function MenuPage() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { menu } = useContext(AppContext);

  const handleSearch = async () => {
    //implement search
    if (!searchTerm) return Alert.alert("Please enter a search term");

    Alert.alert("Searching for: " + searchTerm);
  };

  return (
    <SafeAreaView style={[styles.container]}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <HeaderComponent canGoBack={false} label="Menu" />
        <SearchComponent
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onPress={handleSearch}
        />

        <View style={styles.contentContainer}>
          {menu.map((item: MenuType, index: number) => (
            <MenuItem key={item.id} item={item} />
          ))}
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
    width: "100%",
  },
  scrollContainer: { width: "100%" },
  contentContainer: {
    width: "90%",
    marginTop: 16,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch",
    flexWrap: "wrap",
  },
});
