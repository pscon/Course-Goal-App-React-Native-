import React from "react";
import { StyleSheet, Text, View } from "react-native";
function GoalItems({ itemData }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.listItemText}>{itemData.item.text}</Text>
    </View>
  );
}

export default GoalItems;

const styles = StyleSheet.create({
  listItem: {
    padding: 8,
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  listItemText: {
    color: "white",
  },
});
