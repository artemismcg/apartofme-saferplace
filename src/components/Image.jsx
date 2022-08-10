import React from 'react'
import { Image, View, StyleSheet, ImageBackground, Alert } from 'react-native'
import StyledText from './StyledText.jsx'
import Button from './Button.jsx'

const backgrounds = [
    {bg: 'calmBackground', src:(require('../../assets/ParentOnboarding/calm-background.png'))},
    {bg: 'gardenBg1', src:(require('../../assets/Garden_bg1.png'))}
]

function getBg (bgName){
    return backgrounds.find((background) => background.bg === bgName)
}

const ImageScreen = ({imageToLoad, backgroundToLoad, title, description, buttonTitle, navigation, welcomeText, route}) => (
    <View style={styles.container}>
        <ImageBackground source = {getBg(backgroundToLoad).src} style={styles.background}>
        <StyledText fontSize='secondaryText' colorPrimaryDark='primaryDark' align='center' font='font' welcomeTextParentOnboardingMargin='welcomeTextParentOnboardingMargin'>{welcomeText}</StyledText>
            {imageToLoad === 'SaferPlaceLogo' ? <Image style={styles.saferPlaceLogo} source={require('../../assets/ParentOnboarding/Safer-Place-Logo.png')}/>:null}
            {imageToLoad === 'mushroom' ? <Image style={styles.mushRoomImage} source={require('../../assets/Mushroom.png')}/>:null}
            {imageToLoad === 'Tree1' ? <Image style={styles.treeImage} source={require('../../assets/Tree1.png')}/>:null}
            <View>
                <StyledText fontSize='largeTitle' colorPrimaryDark='primaryDark' align='center' font='font' textPaddingParentOnboarding='textPaddingParentOnboarding'>{title}</StyledText>
                <StyledText fontSize='secondaryText' colorSecondaryDark='secondaryDark' align='center' font='font'>
                {description}</StyledText>
            </View>
            {buttonTitle ? <Button
                title={buttonTitle}
                navigation={navigation}
                route={route}
            />:null}
        </ImageBackground>
    </View>
)

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
    },
    mushRoomImage: {
        width: 406,
        height: 330,
        marginBottom: -35
    },
    treeImage: {
        width: 406,
        height: 460,
        top: -70,
        marginBottom: -135
    },
    saferPlaceLogo: {
        width: 400,
        height: 150,
        resizeMode: 'contain',
        // top: 100
    }
})

export default ImageScreen
