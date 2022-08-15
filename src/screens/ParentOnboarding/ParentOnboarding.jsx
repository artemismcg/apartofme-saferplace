import React, { useCallback, useEffect, useState } from 'react';
import { View, StyleSheet, Image, ImageBackground } from "react-native";
import Button from '../../components/Button.jsx';
import ImageUtils from '../../utils/ImageUtils';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import StyledText from '../../components/StyledText.jsx';

const title = `WELCOME
TO A`

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
            <StyledText fontSize='secondaryText' colorPrimaryDark='primaryDark' align='center' font='font'>{title}</StyledText>
            <Image source={require('../../../assets/ParentOnboarding/Safer-Place-Logo.png')} style={styles.saferPlaceLogo}/>
            <Button
                title={'GET STARTED'}
                navigation={navigation}
                buttonDisabled={false}
                route={'SelectUser'}
            />
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
  },
  saferPlaceLogo: {
    width: 400,
    height: 150,
    resizeMode: 'contain',
    marginTop: 50  
  }
})

export default ParentOnBoardingPage;