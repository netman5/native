import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/Section/GoalItem';
import { courseGoalsList } from './types/appTypes';

function App(): JSX.Element {
  const [courseGoals, setCourseGoals] = useState<courseGoalsList>([]);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const addGoalHandler = (enteredGoal: string): void => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { key: Math.random().toString(), value: enteredGoal },
    ]);
  };

  const removeGoalHandler = (goalId: string): void => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.key !== goalId);
    });
  };

  const handleModal = (): void => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.appContainer}>
      <Button title="Add New Goal" onPress={handleModal} color='#5e0acc' />
      <GoalInput visible={isModalVisible} onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={itemData => (
            <GoalItem
              value={itemData.item.value}
              id={itemData.item.key}
              onDelete={removeGoalHandler}
            />
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
