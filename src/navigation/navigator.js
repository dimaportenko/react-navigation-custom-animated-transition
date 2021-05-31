import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/HomeScreen';
import {ListScreen} from '../screens/ListScreen';
import {useState} from 'react';

const Stack = createStackNavigator();

export const Navigator = () => {
  const [index, setIndex] = useState(0);

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: 'CUSTOM TRANSITION',
        headerTitleStyle: {
          letterSpacing: 3,
        },
        headerBackTitleVisible: false,
        headerTintColor: 'black',
      }}>
      <Stack.Screen name="Home">
        {props => <HomeScreen {...props} index={index} setIndex={setIndex} />}
      </Stack.Screen>
      <Stack.Screen name="List">
        {props => <ListScreen {...props} index={index} setIndex={setIndex} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};
