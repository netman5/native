import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/Section/GoalItem';
import { courseGoalsList } from './types/appTypes';

function App(): JSX.Element {
  const [courseGoals, setCourseGoals] = useState<courseGoalsList>([]);

  const addGoalHandler = (enteredGoal: string): void => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { key: Math.random().toString(), value: enteredGoal },
    ]);
  };
  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={itemData => (
            <GoalItem value={itemData.item.value} key={itemData.item.key} />
          )}
          keyExtractor={(item, index) => item.key}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
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
});

export default App;
