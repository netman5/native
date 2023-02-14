import React from 'react';
import { StyleSheet } from 'react-native';
import HomePage from './components/HomePage';
import TestComponent from './components/TestComponent';


function App(): JSX.Element {
  return (
    <TestComponent />
  );
}

const styles = StyleSheet.create({
  appContainer: {},
});

export default App;
