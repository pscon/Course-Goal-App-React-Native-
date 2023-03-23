import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
function GoalItems({ onDeleteItem, itemData }) {
  return (
    <View style={styles.listItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={onDeleteItem.bind(this, itemData.item.text)}
      >
        <Text style={styles.listItemText}>{itemData.item.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItems;

const styles = StyleSheet.create({
  listItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  listItemText: {
    color: "white",
    padding: 8,
  },
});
