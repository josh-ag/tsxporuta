import Svg, { Path } from "react-native-svg";
import { MenuType } from "../../type";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";

export const MenuItem = ({ item }: { item: MenuType }) => {
  const itemObj = JSON.stringify(item);

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.menuItem}
      onPress={() =>
        router.push({
          pathname: "products/[id]",
          params: { item: itemObj, id: item.id },
        })
      }
    >
      <View style={styles.menuItemHeader}>
        <TouchableOpacity activeOpacity={1}>
          <Svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              d="M20.9988 8.25C20.9988 5.765 18.8998 3.75 16.3108 3.75C14.3758 3.75 12.7138 4.876 11.9988 6.483C11.2838 4.876 9.62184 3.75 7.68584 3.75C5.09884 3.75 2.99884 5.765 2.99884 8.25C2.99884 15.47 11.9988 20.25 11.9988 20.25C11.9988 20.25 20.9988 15.47 20.9988 8.25Z"
              stroke="#4A4A4A"
              stroke-width="1.21292"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </Svg>
        </TouchableOpacity>
      </View>

      <View style={{ marginVertical: 16 }}>
        <Image
          source={item.images[0]}
          resizeMode="contain"
          style={{
            alignSelf: "center",
            marginBottom: 8,
            width: 94,
            height: 94,
          }}
        />
        <View style={styles.itemTextContainer}>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={[
              styles.text,
              {
                fontWeight: "500",
                fontFamily: "Poppins-Medium",
                fontSize: 14,
                width: "70%",
                color: "#151515",
              },
            ]}
          >
            {item.name}
          </Text>
          <Text
            style={[
              styles.text,
              {
                color: "#DB3C25",
                fontSize: 14,
                fontFamily: "Poppins-Medium",
                fontWeight: "500",
              },
            ]}
          >
            &#163;{item.amount}
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.menuItemButton} activeOpacity={1}>
        <Svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            d="M15.8569 10.8843V6.38434C15.8569 5.38978 15.4618 4.43595 14.7586 3.73269C14.0553 3.02943 13.1015 2.63434 12.1069 2.63434C11.1124 2.63434 10.1585 3.02943 9.45527 3.73269C8.75201 4.43595 8.35692 5.38978 8.35692 6.38434V10.8843M19.7129 8.89134L20.9759 20.8913C21.0459 21.5563 20.5259 22.1343 19.8569 22.1343H4.35692C4.19913 22.1345 4.04306 22.1015 3.89887 22.0374C3.75467 21.9733 3.62557 21.8796 3.51994 21.7624C3.41432 21.6452 3.33453 21.507 3.28577 21.357C3.23701 21.2069 3.22037 21.0483 3.23692 20.8913L4.50092 8.89134C4.53007 8.6149 4.66054 8.35904 4.86717 8.1731C5.07379 7.98715 5.34194 7.88429 5.61992 7.88434H18.5939C19.1699 7.88434 19.6529 8.31934 19.7129 8.89134ZM8.73192 10.8843C8.73192 10.9838 8.69241 11.0792 8.62208 11.1495C8.55176 11.2198 8.45637 11.2593 8.35692 11.2593C8.25746 11.2593 8.16208 11.2198 8.09175 11.1495C8.02143 11.0792 7.98192 10.9838 7.98192 10.8843C7.98192 10.7849 8.02143 10.6895 8.09175 10.6192C8.16208 10.5488 8.25746 10.5093 8.35692 10.5093C8.45637 10.5093 8.55176 10.5488 8.62208 10.6192C8.69241 10.6895 8.73192 10.7849 8.73192 10.8843ZM16.2319 10.8843C16.2319 10.9838 16.1924 11.0792 16.1221 11.1495C16.0518 11.2198 15.9564 11.2593 15.8569 11.2593C15.7575 11.2593 15.6621 11.2198 15.5918 11.1495C15.5214 11.0792 15.4819 10.9838 15.4819 10.8843C15.4819 10.7849 15.5214 10.6895 15.5918 10.6192C15.6621 10.5488 15.7575 10.5093 15.8569 10.5093C15.9564 10.5093 16.0518 10.5488 16.1221 10.6192C16.1924 10.6895 16.2319 10.7849 16.2319 10.8843Z"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </Svg>

        <Text
          style={[
            styles.text,
            { color: "#fff", marginLeft: 6.67, fontSize: 12 },
          ]}
        >
          Add To Cart
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

// @style rules
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F9F9F9" },

  scrollContainer: { width: "100%" },

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

  searchContainer: {
    width: "auto",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },

  headerText: {
    fontSize: 14,
    fontFamily: "Poppins-Medium",
    fontWeight: "500",
    textAlign: "center",
    color: "#151515",
  },

  search: {
    width: "90%",
    backgroundColor: "#FFF",
    borderColor: "#E1E5E9",
    color: "#151515",
    borderWidth: 1,
    fontFamily: "Poppins-Regular",
    fontWeight: "400",
    fontSize: 14,
    borderRadius: 8,
  },

  contentContainer: {
    width: "90%",
    marginTop: 16,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch",
    flexWrap: "wrap",
  },

  menuItemHeader: { flex: 1, flexDirection: "row", justifyContent: "flex-end" },

  menuItem: {
    width: "48%",
    height: 228,
    justifyContent: "center",
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },

  itemTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  menuItemButton: {
    flexDirection: "row",
    backgroundColor: "#DB3C25",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: "100%",
    paddingVertical: 12,
    borderRadius: 50,
  },

  text: {
    color: "#151515",
    fontFamily: "Poppins-Regular",
    fontWeight: "500",
    fontSize: 14,
  },
});
