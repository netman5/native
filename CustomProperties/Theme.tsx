import React from 'react';
import { MD3LightTheme as DefaultTheme, configureFonts } from 'react-native-paper';
import fontConfig from './Fonts';

const theme = {
  ...DefaultTheme,
  roundness: 30,
  colors: {
    ...DefaultTheme.colors,
    primary: '#5e0acc',
    accent: '#f1c40f',
    favorite: "#BADA55",
    cancelButton: "#a4c639",
    iconColor: "#808080",
  },
  fonts: configureFonts({ config: fontConfig }),
}

export default theme;