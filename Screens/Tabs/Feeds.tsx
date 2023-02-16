import React from 'react'
import { View, Text, Button } from 'react-native'

function Feeds({ navigation }) {
  return (
    <View>
      <Text>This is feeds route</Text>
      <Button title="Press Me" onPress={() => navigation.navigate('Root', {
        screen: 'Details',
        initial: false,
      })} />
    </View>
  )
}

export default Feeds