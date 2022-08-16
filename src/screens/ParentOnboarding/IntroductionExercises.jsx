import React from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import ImageScreen from '../../components/CustomImage.jsx';
import ImageUtils from '../../utils/ImageUtils';

const description = `A simple introduction to how 
exercises will work, and an 
invitation to try one themselves.`

const IntroductionExercises = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ImageBackground source = {ImageUtils.getBg('gardenBg1').src} style={styles.background}>
                <ImageScreen imageToLoad={'mushroom'} 
                title={'Exercises'} 
                description={description} 
                buttonTitle={"CONTINUE"} 
                navigation={navigation}
                route={'GroundingExercise'}
                />
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    background: {
      flex: 1,
      justifyContent: 'center',
      resizeMode: 'cover'
  }
})

export default IntroductionExercises;