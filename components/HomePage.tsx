import React from 'react';
import { StyleSheet, View, FlatList, Button, StatusBar } from 'react-native';
import { Button as PaperButton } from 'react-native-paper';
import GoalInput from '../components/GoalInput';
import GoalItem from '../components/Section/GoalItem';
import { courseGoalsList } from '../types/appTypes';


function HomePage({ navigation }): JSX.Element {
  const [courseGoals, setCourseGoals] = React.useState<courseGoalsList>([]);
  const [isModalVisible, setIsModalVisible] = React.useState<boolean>(false);

  const addGoalHandler = (enteredGoal: string): void => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { key: Math.random().toString(), value: enteredGoal },
    ]);

    setIsModalVisible(false);
  };

  const removeGoalHandler = (goalId: string): void => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.key !== goalId);
    });
  };

  const handleModal = (): void => {
    setIsModalVisible(true);
  };

  const handleCancel = (): void => {
    setIsModalVisible(false);
  }

  return (
    <>
      <View style={styles.appContainer}>
        <Button title="Add New Goal" onPress={handleModal} />
        <GoalInput
          visible={isModalVisible}
          onAddGoal={addGoalHandler}
          onCancel={handleCancel}
        />
        <FlatList
          data={courseGoals}
          renderItem={itemData => (
            <GoalItem
              id={itemData.item.key}
              onDelete={removeGoalHandler}
              value={itemData.item.value}
            />
          )}
        />
        <PaperButton
          mode="outlined"
          buttonColor='white'
          children="Go to Test"
          onPress={() => navigation.navigate('Test')}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a',
  },
  goalsContainer: {
    flex: 5,
  },
});

export default React.memo(HomePage);