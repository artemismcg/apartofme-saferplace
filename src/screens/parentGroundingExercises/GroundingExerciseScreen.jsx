import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import ImageScreen from '../../components/Image.jsx'

const description = `A simple introduction to how 
exercises will work, and an 
invitation to try one themselves.`

const GroundingExercisePage = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ImageScreen imageToLoad={'Tree1'} backgroundToLoad={'gardenBg1'} title={'Grounding Exercise'} description={description} buttonTitle={"LET'S START"} navigation={navigation}/>
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

export default GroundingExercisePage;