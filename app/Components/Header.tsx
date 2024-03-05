import { Pressable, StyleSheet, Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";

type HeaderTypeProps = {
  label?: string;
  canGoBack?: boolean;
  onPress?: () => void;
};

export const HeaderComponent = ({
  label,
  canGoBack = false,
  onPress,
}: HeaderTypeProps) => {
  return (
    <View
      style={[
        styles.headerContainer,
        !canGoBack && { borderBottomColor: "#E1E5E9", borderBottomWidth: 1 },
      ]}
    >
      {canGoBack && (
        <Pressable onPress={onPress} style={styles.backButton}>
          <Svg
            width="7"
            height="11"
            viewBox="0 0 7 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.79001 0.230017C5.92784 0.373276 6.00315 0.565395 5.9994 0.764157C5.99565 0.962918 5.91314 1.15206 5.77001 1.29002L1.83201 5.00002L5.77001 8.71002C5.84435 8.77745 5.9044 8.85913 5.9466 8.9502C5.98881 9.04127 6.0123 9.13988 6.01569 9.2402C6.01908 9.34052 6.00229 9.44049 5.96634 9.53421C5.93038 9.62792 5.87598 9.71346 5.80635 9.78576C5.73673 9.85806 5.6533 9.91565 5.56102 9.95512C5.46873 9.99458 5.36945 10.0151 5.26908 10.0155C5.16871 10.0159 5.06928 9.99616 4.97668 9.95743C4.88408 9.91869 4.8002 9.86176 4.73001 9.79002L0.230008 5.54002C0.157421 5.47005 0.0996844 5.38618 0.0602489 5.29339C0.0208133 5.20061 0.000488281 5.10083 0.000488281 5.00002C0.000488281 4.8992 0.0208133 4.79942 0.0602489 4.70664C0.0996844 4.61386 0.157421 4.52998 0.230008 4.46002L4.73001 0.210017C4.87327 0.0721872 5.06539 -0.0031283 5.26415 0.000621912C5.46291 0.00437213 5.65205 0.0868812 5.79001 0.230017Z"
              fill="#131313"
            />
          </Svg>
        </Pressable>
      )}

      {label && (
        <Text style={[styles.headerText, { textAlign: "center" }]}>
          {label}
        </Text>
      )}
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
    justifyContent: "flex-start",
    alignItems: "center",
  },

  headerText: {
    flex: 1,
    fontSize: 14,
    fontFamily: "Poppins-Medium",
    fontWeight: "500",
    textAlign: "center",
    color: "#151515",
  },

  backButton: {
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
});
