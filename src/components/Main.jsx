import React, { useCallback, useEffect, useState } from 'react';
import { View, Text } from 'react-native'
import ImageScreen from '../components/Image.jsx'
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

const description = `A simple introduction to how exercises will work, and an invitation to try one themselves.`

SplashScreen.preventAutoHideAsync();


const Main = () => {
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
        async function prepare() {
          try {
            // Pre-load fonts, make any API calls you need to do here
            await SplashScreen.preventAutoHideAsync()
            await Font.loadAsync({
                'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf')
              });
              
            // Artificially delay for two seconds to simulate a slow loading
            // experience. Please remove this if you copy and paste the code!
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
        <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
            <ImageScreen imageToLoad={'mushroom'} backgroundToLoad={'gardenBg1'} title={'Exercises'} description={description}/>
        </View>
      );
}
export default Main
