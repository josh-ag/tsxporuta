import { View, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import Svg, { Path } from "react-native-svg";

type SearchTypeProps = {
  searchTerm: string;
  setSearchTerm: (val: string) => void;
  onPress: () => void;
};

export const SearchComponent = ({
  searchTerm,
  setSearchTerm,
  onPress,
}: SearchTypeProps) => {
  return (
    <View style={{ flex: 1, width: "100%", alignItems: "center" }}>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search"
          value={searchTerm}
          style={styles.search}
          placeholderTextColor={"#858585"}
          onChangeText={(val) => setSearchTerm(val)}
          onSubmitEditing={onPress}
        />

        <TouchableOpacity
          style={styles.searchIcon}
          activeOpacity={1}
          onPress={onPress}
        >
          <Svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              d="M7.66665 14.5C3.89998 14.5 0.833313 11.4333 0.833313 7.66668C0.833313 3.90001 3.89998 0.833344 7.66665 0.833344C11.4333 0.833344 14.5 3.90001 14.5 7.66668C14.5 11.4333 11.4333 14.5 7.66665 14.5ZM7.66665 1.83334C4.44665 1.83334 1.83331 4.45334 1.83331 7.66668C1.83331 10.88 4.44665 13.5 7.66665 13.5C10.8866 13.5 13.5 10.88 13.5 7.66668C13.5 4.45334 10.8866 1.83334 7.66665 1.83334Z"
              fill="#151515"
            />
            <Path
              d="M14.6667 15.1667C14.54 15.1667 14.4133 15.12 14.3133 15.02L12.98 13.6867C12.7867 13.4933 12.7867 13.1733 12.98 12.98C13.1733 12.7867 13.4933 12.7867 13.6867 12.98L15.02 14.3133C15.2133 14.5067 15.2133 14.8267 15.02 15.02C14.92 15.12 14.7933 15.1667 14.6667 15.1667Z"
              fill="#151515"
            />
          </Svg>
        </TouchableOpacity>
      </View>
    </View>
  );
};

//@styles
const styles = StyleSheet.create({
  searchContainer: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  search: {
    flex: 1,
    width: "100%",
    padding: 12,
    paddingLeft: 45,
    backgroundColor: "#FFF",
    borderColor: "#E1E5E9",
    color: "#151515",
    borderWidth: 1,
    fontFamily: "Poppins-Regular",
    fontWeight: "400",
    fontSize: 14,
    borderRadius: 8,
    letterSpacing: 1.2,
  },

  searchIcon: {
    position: "absolute",
    left: 20,
  },
});
