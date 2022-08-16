import React from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import ImageScreen from '../../components/CustomImage.jsx';
import TextButton from '../../components/TextButton.jsx';
import ImageUtils from '../../utils/ImageUtils';

const description = `A simple introduction to how 
exercises will work, and an 
invitation to try one themselves.`

const GroundingExerciseScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ImageBackground source = {ImageUtils.getBg('gardenBg1').src} style={styles.background}>
                <ImageScreen imageToLoad={'Tree1'} 
                title={'Grounding Exercise'} 
                description={description} 
                buttonTitle={"LET'S START"} 
                navigation={navigation}
                route={"GroundingInstruction"}
                />
                <TextButton
                navigation={navigation} 
                backAction={false} 
                title={"TELL ME MORE"}
                route={"AboutExercise"}
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

export default GroundingExerciseScreen;