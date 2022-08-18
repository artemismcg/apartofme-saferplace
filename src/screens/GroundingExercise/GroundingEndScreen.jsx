import React from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import ConfettiCannon from 'react-native-confetti-cannon';
import ImageScreen from '../../components/CustomImage.jsx';
import ImageUtils from '../../utils/ImageUtils';
import theme from '../../theme.js';

const description = `Anytime you need to release stress or tensions imagine you can release it into the Earth through the soles of your feet, and receive calm healing energy back up from the earth into your body.`

const GroundingEndScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ImageBackground source = {ImageUtils.getBg('gardenBg1').src} style={styles.background}>
                <ConfettiCannon 
                count={200} 
                origin={{x: 0, y: 0}} 
                colors={[theme.colors.secondaryLightGreen, theme.colors.secondaryLightOrange, theme.colors.secondaryLightPink, theme.colors.primaryPurple]}
                explosionSpeed={1000}
                fallSpeed={8000}
                fadeOut={true}
                />
                <ImageScreen imageToLoad={'Tree1'} 
                title={'Well done!'} 
                description={description} 
                buttonTitle={"NEXT"} 
                navigation={navigation}
                route={""}
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

export default GroundingEndScreen;