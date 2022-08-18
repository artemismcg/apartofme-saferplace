import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import theme from '../theme.js'

import IntroductionToGroundingExercise from '../screens/ParentOnboarding/IntroductionExercises';
import GroundingExercise from '../screens/GroundingExercise/GroundingExerciseScreen';
import Splashscreen from '../screens/ParentOnboarding/Splashscreen';
import OnBoarding from '../screens/ParentOnboarding/OnBoarding';
import LanguageSelection from '../screens/ParentOnboarding/LanguageSelection';
import UserSelection from '../screens/ParentOnboarding/UserSelection';
import AboutExercise from '../screens/faq/AboutExerciseScreen';
import GroundingInstruction from '../screens/GroundingExercise/GroundingInstructionScreen';
import GroundingStep from '../screens/GroundingExercise/GroundingStepScreen';
import GroundingButtonInput from '../screens/GroundingExercise/GroundingButtonInputScreen';
import GroundingTextInput from '../screens/GroundingExercise/GroundingTextInputScreen';
import GroundingEnd from '../screens/GroundingExercise/GroundingEndScreen.jsx';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTransparent: true,
        headerTitleAlign: 'center', 
        headerTitleStyle:{fontFamily: theme.fonts.main, fontSize: theme.fontSizes.secondaryText, color: theme.colors.backgroundDarkBrilliantWhite},
        headerTintColor: theme.colors.backgroundDarkBrilliantWhite}}>
        <Stack.Screen name="Home" component={Splashscreen} options={{headerShown: false}}/>
        <Stack.Screen name="LanguageSelection" component={LanguageSelection} options={{title: 'LANGUAGE SELECTION'}}/>
        <Stack.Screen name="SelectUser" component={UserSelection} options={{title: 'USER SELECTION'}}/>
        <Stack.Screen name="OnBoarding" component={OnBoarding} options={{headerShown: false}}/>
        <Stack.Screen name="IntroductionToGroundingExercise" component={IntroductionToGroundingExercise} options={{headerShown: false}}/>
        <Stack.Screen name="GroundingExercise" component={GroundingExercise} options={{title: 'Grounding Exercise'}}/>
        <Stack.Screen name="AboutExercise" component={AboutExercise}  options={{headerShown: false}}/>
        <Stack.Screen name="GroundingInstruction" component={GroundingInstruction}  options={{title: 'Grounding Exercise'}}/>
        <Stack.Screen name="GroundingStep" component={GroundingStep}  options={{title: 'Grounding Exercise'}}/>
        <Stack.Screen name="GroundingButtonInput" component={GroundingButtonInput}  options={{title: 'Grounding Exercise'}}/>
        <Stack.Screen name="GroundingTextInput" component={GroundingTextInput}  options={{title: 'Grounding Exercise'}}/>
        <Stack.Screen name="GroundingEnd" component={GroundingEnd}  options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;