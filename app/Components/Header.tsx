import { Pressable, StyleSheet, Text, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";

type HeaderTypeProps = {
  label: string;
  canGoBack: boolean;
  onPress?: () => void;
};

export const HeaderComponent = ({
  label,
  canGoBack,
  onPress,
}: HeaderTypeProps) => {
  return (
    <View style={styles.headerContainer}>
      {canGoBack && (
        <Pressable onPress={onPress}>
          <Feather
            name="chevron-left"
            size={24}
            color={"#DB3C25"}
            onPress={onPress}
          />
        </Pressable>
      )}

      <Text style={[styles.headerText, { textAlign: "center" }]}>{label}</Text>
    </View>
  );
};

// @style rules
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F9F9F9", width: "100%" },

  headerContainer: {
    height: 72,
    width: "100%",
    paddingHorizontal: "5%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#E1E5E9",
    borderBottomWidth: 1,
  },

  headerText: {
    fontSize: 14,
    fontFamily: "Poppins-Medium",
    fontWeight: "500",
    textAlign: "center",
    color: "#151515",
  },
});
