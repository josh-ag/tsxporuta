import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HeaderComponent } from "../Components/Header";
import { CartItem } from "../Components/CartItem";
import { useContext } from "react";
import { AppContext } from "../../context/appContext";

export default function CartPage() {
  const { carts } = useContext(AppContext);

  const cartTotal = carts
    .map((cart: any) => cart.amount)
    .reduce((accumulator: any, currentValue: any) => {
      return accumulator + currentValue;
    }, 0);

  return (
    <SafeAreaView style={[styles.container]}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <HeaderComponent label="Cart" />

        <View style={styles.contentContainer}>
          {carts.map((cartItem: MenuType, index: number) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))}

          <View style={{ marginVertical: 32, width: "100%" }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                marginBottom: 10,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text
                  style={[
                    styles.text,
                    {
                      fontWeight: "500",
                      fontFamily: "Poppins-Medium",
                      color: "#151515",
                    },
                  ]}
                >
                  Total
                </Text>
                <Text style={styles.text}> ({carts.length} items)</Text>
              </View>

              <Text
                style={[
                  styles.text,
                  {
                    fontWeight: "500",
                    fontFamily: "Poppins-Medium",
                    color: "#151515",
                  },
                ]}
              >
                &#163;{cartTotal}
              </Text>
            </View>

            <TouchableOpacity
              style={[styles.menuItemButton, { width: "100%" }]}
              activeOpacity={1}
            >
              <Text
                style={[
                  styles.text,
                  { color: "#fff", fontFamily: "Poppins-Medium" },
                ]}
              >
                Checkout - &#163;{cartTotal}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F9F9F9" },
  scrollContainer: {
    width: "100%",
  },
  headerContainer: {
    height: 72,
    paddingHorizontal: "5%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
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

  accordionContainer: { marginVertical: 24 },

  headerButton: {
    width: 36,
    height: 36,
    borderRadius: 8,
    padding: 8,
    borderWidth: 1,
    backgroundColor: "#fff",
    borderColor: "#E1E5E9",
    alignItems: "center",
    justifyContent: "center",
  },

  contentContainer: {
    width: "90%",
    paddingTop: 16,
    alignItems: "center",
    alignSelf: "center",
    // backgroundColor: '#fff',
  },
  menuItemHeader: { flex: 1, flexDirection: "row", justifyContent: "flex-end" },

  menuItem: {
    width: "100%",
    borderRadius: 8,
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
    height: 48,
    paddingVertical: 12,
    borderRadius: 50,
  },
  text: {
    color: "#151515",
    fontFamily: "Poppins-Regular",
    fontWeight: "400",
    fontSize: 12,
  },
});
