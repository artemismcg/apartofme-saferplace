import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import FaqGallery from './FaqGallery.jsx';
import ImageScreen from '../../components/Image.jsx'
import StyledText from './StyledText.jsx'

const AboutExerciseScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <FaqGallery backgroundToLoad={'gardenBg1'} title={'About'} description={'FAQS and tips about this activity'}/>
        </View>
    )
}

/* style this on a theme named styledscreen */

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default AboutExerciseScreen