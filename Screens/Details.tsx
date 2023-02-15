import React from 'react'
import { View, Text, Button } from 'react-native'

const Details = ({ route, navigation }) => {
  const [count, setCount] = React.useState(0);
  const { itemId, otherParam } = route.params;

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount((c) => c + 1)} title="Updated count" />
      ),
    });
  }, [navigation, setCount]);
  return (
    <View>
      <Text>Details</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>

      <View>
        <Button
          title="Go to Details... again"
          onPress={() =>
            navigation.push('Details', {
              itemId: Math.floor(Math.random() * 100),
            })
          }
        />
        <Button title="Go to Home" onPress={() => navigation.popToTop()} />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
      <Text>Count: {count}</Text>
    </View >
  )
}

export default Details