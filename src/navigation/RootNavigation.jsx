import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import theme from '../theme.js'

import IntroductionToGroundingExercise from '../screens/ParentOnboarding/IntroductionExercises';
import GroundingExercise from '../screens/parentGroundingExercises/GroundingExerciseScreen';
import ParentOnBoarding from '../screens/ParentOnboarding/ParentOnboarding';
import OnBoarding from '../screens/ParentOnboarding/OnBoarding';
import UserSelection from '../screens/ParentOnboarding/UserSelection';
import AboutExercise from '../screens/faq/AboutExerciseScreen';
import GroundingInstruction from '../screens/parentGroundingExercises/GroundingInstructionScreen';
import GroundingStepOne from '../screens/parentGroundingExercises/GroundingStepOneScreen';

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
        <Stack.Screen name="OnBoarding" component={OnBoarding} options={{headerShown: false}}/>
        <Stack.Screen name="IntroductionToGroundingExercise" component={IntroductionToGroundingExercise} options={{headerShown: false}}/>
        <Stack.Screen name="GroundingExercise" component={GroundingExercise} options={{title: 'Grounding Exercise'}}/>
        <Stack.Screen name="AboutExercise" component={AboutExercise}  options={{headerShown: false}}/>
        <Stack.Screen name="GroundingInstruction" component={GroundingInstruction}  options={{title: 'Grounding Exercise'}}/>
        <Stack.Screen name="GroundingStepOne" component={GroundingStepOne}  options={{title: 'Grounding Exercise'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;