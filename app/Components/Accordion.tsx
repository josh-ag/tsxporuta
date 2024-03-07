import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AccordionPropTypes } from "../../type";
import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export const Accordion = ({
  title,
  children,
  style,
  index,
}: AccordionPropTypes) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <TouchableOpacity
      style={[style, { borderTopWidth: index === 0 ? 0.5 : 0 }]}
      onPress={() => setExpanded(!expanded)}
      activeOpacity={1}
    >
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.text}>{title}</Text>
          <Ionicons
            name={expanded ? "chevron-up" : "chevron-down"}
            size={18}
            color={"#858585"}
          />
        </View>
        {expanded && <View>{children}</View>}
      </View>
    </TouchableOpacity>
  );
};

//@style def.
const styles = StyleSheet.create({
  text: {
    color: "#151515",
    fontFamily: "Poppins-Medium",
    fontWeight: "500",
    fontSize: 14,
  },
});
