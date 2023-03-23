import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItems from "./components/GoalItems";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [goals, setGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  function startAddGoalHandler() {
    setModalVisible(true);
  }

  function cancelAddGoalHandler() {
    setModalVisible(false);
  }

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
    // console.log(enteredGoalText);
    setEnteredGoalText("");
    setModalVisible(false);
  }

  // function for deleting goal
  function deleteGoalHandler(text) {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.text !== text);
    });
  }
  return (
    <>
      <StatusBar style="light" />

      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#5e0acc"
          onPress={startAddGoalHandler}
        />

        <GoalInput
          visible={modalVisible}
          onCancel={cancelAddGoalHandler}
          goalInputHandler={goalInputHandler}
          addGoalHandler={addGoalHandler}
          enteredGoalText={enteredGoalText}
        />

        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            renderItem={(itemData) => {
              return (
                <>
                  <GoalItems
                    itemData={itemData}
                    onDeleteItem={deleteGoalHandler}
                  />
                </>
              );
            }}
          />
        </View>
        <View></View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 5,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
