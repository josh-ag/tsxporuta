import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Accordion } from "./Accordion";

export const AccordionGroup = () => {
  const [activeSections, setActiveSections] = useState([0]);

  const accordionList = [
    { title: "Ingredient", id: 1, content: "Ingredient Contents" },
    {
      title: "Nutritional Information",
      id: 2,
      content: "Nutritional Information Contents",
    },
    { title: "How to Prepare", id: 3, content: "How to prepare Contents" },
    {
      title: "Dietary Information",
      id: 4,
      content: "Dietary Information Contents",
    },
    {
      title: "Storage Information",
      id: 5,
      content: "Storage Information Contents",
    },
    { title: "Extra", id: 6, content: "Extra Contents" },
  ];

  const renderSections = () => {
    return accordionList.map((list, index) => {
      return (
        <Accordion
          style={styles.list}
          key={index}
          title={list.title}
          expanded={activeSections.includes(index)}
          index={index}
          onPress={() => {
            if (activeSections.includes(index)) {
              setActiveSections(activeSections.filter((i) => i !== index));
            } else {
              setActiveSections([...activeSections, index]);
            }
          }}
        >
          <View style={styles.sectionContainer}>
            <Text style={styles.text}> {list.content}</Text>
          </View>
        </Accordion>
      );
    });
  };

  return <View style={styles.accordionContainer}>{renderSections()}</View>;
};

//@styles

const styles = StyleSheet.create({
  accordionContainer: { marginVertical: 24 },
  sectionContainer: { paddingVertical: 8 },
  text: {
    fontWeight: "400",
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    color: "#4A4A4A",
    lineHeight: 18,
  },

  list: {
    backgroundColor: "#fff",
    borderColor: "#E1E5E9",
    borderBottomWidth: 0.5,
    padding: 12,
  },
});
