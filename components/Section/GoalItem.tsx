import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { courseGoals } from '../../types/appTypes';

function GoalItem(this: any, props: {
  onDelete: (arg0: string) => void;
  id: string;
  value: string;
}): JSX.Element {
  function deleteHandler(this: any, id: string) {
    props.onDelete(id);
  }

  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={deleteHandler.bind(this, props.id)}
        android_ripple={{ color: '#3e0acc' }}
        style={({ pressed }) => pressed && styles.isPressed}
      >
        <Text style={styles.goalText}>{props.value}</Text>
      </Pressable>
    </View >
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },

  isPressed: {
    backgroundColor: 'white',
    opacity: 0.5,
    color: '#5e0acc',
  },
  goalText: {
    padding: 8,
    color: 'white',
  },
});

export default GoalItem;
