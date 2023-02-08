import React from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

function GoalInput({ onAddGoal, visible }): JSX.Element {
  const [enteredGoal, setEnteredGoal] = React.useState<string>('');

  const goalInputHandler = (enteredText: string): void => {
    setEnteredGoal(enteredText);
  };

  const onAddGoalHandler = (): void => {
    onAddGoal(enteredGoal);
    setEnteredGoal('');
  };
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          value={enteredGoal}
          onChangeText={goalInputHandler}
        />
        <View style={styles.btnContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={onAddGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={() => { visible }} />
          </View>

        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
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
  btnContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },

  button: {
    width: '30%',
    marginHorizontal: 8,
  }
});

export default GoalInput;
