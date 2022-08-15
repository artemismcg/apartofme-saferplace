import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import theme from '../theme.js'

import IntroductionToGroundingExercise from '../screens/parentGroundingExercises/IntroductionExercises';
import GroundingExercise from '../screens/parentGroundingExercises/GroundingExerciseScreen';
import ParentOnBoarding from '../screens/ParentOnboarding/ParentOnboarding';
import UserSelection from '../screens/ParentOnboarding/UserSelection';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTransparent: true,
        headerTitleAlign: 'center', 
        headerTitleStyle:{fontFamily: theme.fonts.main, fontSize: theme.fontSizes.secondaryText, color: theme.colors.backgroundDarkBrilliantWhite},
        headerTintColor: theme.colors.backgroundDarkBrilliantWhite}}>
        <Stack.Screen name="Home" component={ParentOnBoarding} options={{headerShown: false}}/>
        <Stack.Screen name="SelectUser" component={UserSelection} options={{title: 'USER SELECTION'}}/>
        <Stack.Screen name="IntroductionToGroundingExercise" component={IntroductionToGroundingExercise} options={{headerShown: false}}/>
        <Stack.Screen name="GroundingExercise" component={GroundingExercise} options={{title: 'Grounding Exercise'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;