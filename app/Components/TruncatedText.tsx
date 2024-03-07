import { StyleSheet, Text, View } from "react-native";

type TruncatedPropType = {
  text: string;
  isExpanded: Boolean;
  setIsExpanded: (arg: Boolean) => void;
};

export const TruncatedText = ({
  text,
  isExpanded,
  setIsExpanded,
}: TruncatedPropType) => {
  const truncatedText = isExpanded ? text : `${text.substring(0, 100)}...`;

  return (
    <View style={styles.truncatedTextContainer}>
      <Text
        style={[
          styles.text,
          {
            fontWeight: "400",
            fontFamily: "Poppins-Regular",
            fontSize: 12,
            color: "#4A4A4A",
            lineHeight: 18,
          },
        ]}
      >
        {truncatedText}
        {!isExpanded && (
          <Text
            onPress={() => setIsExpanded(true)}
            style={[
              styles.text,
              {
                color: "#DB3C25",
                fontWeight: "500",
                fontFamily: "Poppins-Medium",
                fontSize: 12,
                lineHeight: 18,
                paddingLeft: 4,
              },
            ]}
          >
            Read more
          </Text>
        )}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  truncatedTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  text: {
    color: "#151515",
    fontFamily: "Poppins-Regular",
    fontWeight: "500",
    fontSize: 14,
  },
});
