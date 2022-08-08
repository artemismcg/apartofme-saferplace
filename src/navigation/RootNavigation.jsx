import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../components/Main';
import GroundingExercise from '../screens/parentGroundingExercises/GroundingExerciseScreen'

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="GroundingExercise" component={GroundingExercise} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;