import * as React from 'react';
import { Text, useTheme } from 'react-native-paper';

const TestComponent = () => {
  const { colors } = useTheme();
  return <Text style={{ color: colors.primary }}>Hello World!</Text>;
}

export default TestComponent