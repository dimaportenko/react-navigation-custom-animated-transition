import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/HomeScreen';
import {ListScreen} from '../screens/ListScreen';

const Stack = createStackNavigator();

export const Navigator = () => {
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
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="List" component={ListScreen} />
    </Stack.Navigator>
  );
};
