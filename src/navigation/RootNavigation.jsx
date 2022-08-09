import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import theme from '../theme.js'

import HomeScreen from '../components/Main';
import GroundingExercise from '../screens/parentGroundingExercises/GroundingExerciseScreen'

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTransparent: true,
        headerTitleAlign: 'center', 
        headerTitleStyle:{fontFamily: theme.fonts.main, fontSize: theme.fontSizes.secondaryText, color: theme.colors.backgroundDarkBrilliantWhite},
        headerTintColor: theme.colors.backgroundDarkBrilliantWhite}}>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="GroundingExercise" component={GroundingExercise} options={{title: 'Grounding Exercise'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;