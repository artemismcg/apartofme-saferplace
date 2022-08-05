import React from 'react'
import { Image, View, StyleSheet, Text, ImageBackground } from 'react-native'
import StyledText from './StyledText.jsx'

const ImageScreen = ({imageToLoad, backgroundToLoad, title, description}) => (
    <View style={styles.container}>
        {backgroundToLoad === 'gardenBg1' ? <ImageBackground source={(require('../../assets/Garden_bg1.png'))} style={styles.background}>
            {imageToLoad === 'mushroom' ? <Image style={styles.mushRoomImage} source={require('../../assets/Mushroom.png')}/>:null}
            <View>
                <StyledText fontSize='largeTitle' color='primaryDark' align='center' font='font'>{title}</StyledText>
                <StyledText fontSize='secondaryText' color='primaryDark' align='center'>{description}</StyledText>
            </View>
        </ImageBackground>:null}
    </View>
)

/*
    Refactor this to a StyleImage.jsxcls
*/
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
        justifyContent: 'center',
        resizeMode: 'cover'
    },
    mushRoomImage: {
        width: 406,
        height: 315
    }
})

export default ImageScreen
