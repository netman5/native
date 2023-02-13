import React from 'react';
import { DefaultTheme, configureFonts } from 'react-native-paper';
import fontConfig from './Fonts';

const theme = {
  ...DefaultTheme,
  // fonts: configureFonts(fontConfig),
  roundness: 30,
  colors: {
    ...DefaultTheme.colors,
    primary: '#5e0acc',
    accent: '#f1c40f',
    favorite: "#BADA55",
    cancelButton: "#a4c639",
    iconColor: "#808080",
  }
}

export default theme;