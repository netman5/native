import React from 'react';
import { StyleSheet } from 'react-native';
import HomePage from './components/HomePage';
import TestComponent from './components/TestComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from './Screens/Details';
import LogoTitle from './components/Logo';
import { Button } from 'react-native-paper';


const Stack = createNativeStackNavigator();


function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: 'teal',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="Home"
        // options={{ headerTitle: props => <LogoTitle {...props} /> }}
        >
          {props => <HomePage {...props} />}
        </Stack.Screen>
        <Stack.Screen
          name="Test"
          component={TestComponent}
          options={({ route }) => ({ title: route.params?.name })}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          initialParams={{ itemId: 42 }}
          options={({ route, navigation }) => ({
            headerTitle: route.params?.name,
            headerRight: () => (
              <Button children="Update Count" />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  appContainer: {},
});

export default App;
