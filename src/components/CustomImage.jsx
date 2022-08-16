import React from 'react'
import { Image, View, StyleSheet, ImageBackground, Alert } from 'react-native'
import StyledText from './StyledText.jsx'
import Button from './CustomButton.jsx'

const ImageScreen = ({imageToLoad, backgroundToLoad, title, description, buttonTitle, navigation, welcomeText, route}) => (
    <View style={styles.container}>
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
                buttonDisabled={false}
            />:null}
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
        marginBottom: -135
    },
    treeImage: {
        width: 406,
        height: 460,
        top: -140,
        marginBottom: -220
    }
})

export default ImageScreen
