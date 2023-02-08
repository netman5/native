
import React from 'react';
import { Text, View } from 'react-native';
import { SectionProps } from '../../types/appTypes';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export function Section({ children, title, styles, isDarkMode }: SectionProps): JSX.Element {
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}
