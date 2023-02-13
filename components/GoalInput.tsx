import React from 'react';
import { View, TextInput, Button, StyleSheet, Modal, Image } from 'react-native';

function GoalInput({ onAddGoal, visible, onCancel }): JSX.Element {
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
        <Image source={require('../assets/images/goal.png')} style={styles.goalImage} />

        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          value={enteredGoal}
          onChangeText={goalInputHandler}
        />
        <View style={styles.btnContainer}>
          <View style={styles.button}>
            <Button title="Cancel" color="#f31282" onPress={onCancel} />
          </View>

          <View style={styles.button}>
            <Button title="Add Goal" color="#5e0acc" onPress={onAddGoalHandler} />
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
    padding: 16,
    backgroundColor: '#311b6b'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    width: '100%',
    padding: 16,
    marginTop: 8,
    backgroundColor: '#e4d0ff',
    color: "#128438",
    borderRadius: 6,
  },
  btnContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },

  button: {
    width: '30%',
    marginHorizontal: 8,
  },


  goalImage: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  }
});

export default GoalInput;
