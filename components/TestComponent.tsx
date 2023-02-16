import * as React from 'react';
import { Button, Text, useTheme } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import Messages from '../Screens/Tabs/Messages';
import Feeds from '../Screens/Tabs/Feeds';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createNativeStackNavigator();

const TestComponent = ({ navigation }) => {
  const { colors } = useTheme();
  return (
    <View style={styles.testContainer}>
      <Tab.Navigator>
        <Tab.Screen name="Feed" component={Feeds} />
        <Tab.Screen name="Messages" component={Messages} />
      </Tab.Navigator>
      <Text style={styles.testContainer}>
        Test Component
      </Text>

      <Button onPress={() => navigation.navigate('Details', {
        itemId: 86,
        otherParam: 'anything you want here',
      })}>Go to More Details..</Button>
      <Button children="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button children="Go back" onPress={() => navigation.goBack()} />
      <Button
        children="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  )
}

export default TestComponent;

const styles = StyleSheet.create({
  testContainer: {
    flex: 1,
    marginTop: 20,
  }
})