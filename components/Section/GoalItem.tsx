import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { courseGoals } from '../../types/appTypes';

function GoalItem(props: courseGoals): JSX.Element {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{props.value}</Text>
    </View>
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
