import React from 'react';
import {View, ImageBackground, StyleSheet} from 'react-native';
import FaqGallery from '../../components/FaqGallery.jsx';
import ImageUtils from '../../utils/ImageUtils';

const AboutExerciseScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ImageBackground source = {ImageUtils.getBg('aboutGroundingBackground').src} style={styles.background}>
                <FaqGallery 
                title={'About'} 
                description={'FAQS and tips about this activity'}
                navigation={navigation}
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

export default AboutExerciseScreen