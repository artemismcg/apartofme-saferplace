import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import ImageScreen from '../../components/Image.jsx'

const description = `A simple introduction to how 
exercises will work, and an 
invitation to try one themselves.`

const IntroductionExercises = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ImageScreen imageToLoad={'mushroom'} 
            backgroundToLoad={'gardenBg1'} 
            title={'Exercises'} 
            description={description} 
            buttonTitle={"CONTINUE"} 
            navigation={navigation}
            route={'GroundingExercise'}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default IntroductionExercises;