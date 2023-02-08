import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { courseGoals } from '../../types/appTypes';

function GoalItem(props: {
  onDelete: (arg0: string) => void;
  id: string;
  value: string;
}): JSX.Element {
  function deleteHandler(this: any, id: string) {
    props.onDelete(id);
  }

  return (
    <Pressable onPress={deleteHandler.bind(this, props.id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.value}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    padding: 8,
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
  },
});

export default GoalItem;
