import React, { useCallback, useEffect, useState } from 'react';
import { View, StyleSheet, ImageBackground } from "react-native";
import ImageScreen from "../../components/Image.jsx";
import ImageUtils from '../../utils/ImageUtils';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

const description = `lorem ipsum dolor sit amet,
consectetur adipiscing elit, sed
do eiusmod tempor incididunt
ut labore et dolore magna`

SplashScreen.preventAutoHideAsync();

const ParentOnBoardingPage = ({ navigation }) => {
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
        async function prepare() {
          try {
            // Pre-load fonts, make any API calls you need to do here
            await SplashScreen.preventAutoHideAsync()
            await Font.loadAsync({
                'Poppins-Regular': require('../../../assets/fonts/Poppins-Regular.ttf')
              });   
            await new Promise(resolve => setTimeout(resolve, 2000));
          } catch (e) {
            console.warn(e);
          } finally {
            // Tell the application to render
            setAppIsReady(true);
          }
        }
    
        prepare();
      }, []);
    
      const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
          await SplashScreen.hideAsync();
        }
      }, [appIsReady]);
    
      if (!appIsReady) {
        return null;
      }
    return (
        <View style={styles.container} onLayout={onLayoutRootView}>
        <ImageBackground source = {ImageUtils.getBg('calmBackground').src} style={styles.background}>
          <ImageScreen 
                imageToLoad={'SaferPlaceLogo'} 
                welcomeText={'WELCOME \n TO A'} 
                title={'Snappy Title here'} 
                description={description} 
                buttonTitle={"GET STARTED"} 
                navigation={navigation} 
                route={'IntroductionToGroundingExercise'}/>
        </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    background: {
      flex: 1,
      justifyContent: 'center',
      resizeMode: 'cover'
  }
})

export default ParentOnBoardingPage;