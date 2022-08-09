import React from 'react'
import { Image, View, StyleSheet, ImageBackground, Alert } from 'react-native'
import StyledText from './StyledText.jsx'
import Button from './Button.jsx'

const ImageScreen = ({imageToLoad, backgroundToLoad, title, description, buttonTitle, navigation, welcomeText}) => (
    <View style={styles.container}>
        {backgroundToLoad === 'calmBackground' ? <ImageBackground source={(require('../../assets/ParentOnboarding/calm-background.png'))} style={styles.background}>
        <StyledText fontSize='secondaryText' colorPrimaryDark='primaryDark' align='center' font='font' welcomeTextParentOnboardingMargin='welcomeTextParentOnboardingMargin'>{welcomeText}</StyledText>
            {imageToLoad === 'SaferPlaceLogo' ? <Image style={styles.saferPlaceLogo} source={require('../../assets/ParentOnboarding/Safer-Place-Logo.png')}/>:null}
            <View>
                <StyledText fontSize='largeTitle' colorPrimaryDark='primaryDark' align='center' font='font' textPaddingParentOnboarding='textPaddingParentOnboarding'>{title}</StyledText>
                <StyledText fontSize='secondaryText' colorSecondaryDark='secondaryDark' align='center' font='font' secondarytextPaddingParentOnboarding='secondarytextPaddingParentOnboarding'>
                {description}</StyledText>
            </View>
            {buttonTitle ? <Button
                title={buttonTitle}
                navigation={navigation}
            />:null}
        </ImageBackground>:null}
        {backgroundToLoad === 'gardenBg1' ? <ImageBackground source={(require('../../assets/Garden_bg1.png'))} style={styles.background}>
            {imageToLoad === 'mushroom' ? <Image style={styles.mushRoomImage} source={require('../../assets/Mushroom.png')}/>:null}
            {imageToLoad === 'Tree1' ? <Image style={styles.treeImage} source={require('../../assets/Tree1.png')}/>:null}            
            <View>
                <StyledText fontSize='largeTitle' colorPrimaryDark='primaryDark' align='center' font='font'>{title}</StyledText>
                <StyledText fontSize='secondaryText' colorSecondaryDark='secondaryDark' align='center' font='font' textPadding='textPadding'>
                {description}</StyledText>
            </View>
            {buttonTitle ? <Button
                title={buttonTitle}
                navigation={navigation}
            />:null}
        </ImageBackground>:null}
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
        height: 1540,
        top: -80,
        marginBottom: -55
    },
    saferPlaceLogo: {
        width: 400,
        height: 150,
        resizeMode: 'contain',
        top: 60
    }
})

export default ImageScreen
