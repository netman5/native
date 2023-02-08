import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

function GoalInput({ onAddGoal }): JSX.Element {
  const [enteredGoal, setEnteredGoal] = React.useState<string>('');

  const goalInputHandler = (enteredText: string): void => {
    setEnteredGoal(enteredText);
  };

  const onAddGoalHandler = (): void => {
    onAddGoal(enteredGoal);
    setEnteredGoal('');
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal!"
        onChangeText={goalInputHandler}
      />
      <Button title="Add Goal" onPress={onAddGoalHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
});

export default GoalInput;
