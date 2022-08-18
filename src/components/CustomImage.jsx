import React from 'react'
import { Image, View, StyleSheet, ImageBackground, Alert } from 'react-native'
import StyledText from './StyledText.jsx'
import Button from './CustomButton.jsx'

const ImageScreen = ({imageToLoad, title, description, buttonTitle, navigation, route}) => (
    <View style={styles.container} >
        {imageToLoad === 'mushroom' ? <Image style={styles.mushRoomImage} source={require('../../assets/Mushroom.png')}/>:null}
        {imageToLoad === 'Tree1' ? <Image style={styles.treeImage} source={require('../../assets/Tree1.png')}/>:null}
        <View style={route === 'GroundingInstruction' ? styles.innerContainerTree : styles.innerContainer}>
            <StyledText fontSize='largeTitle' colorPrimaryDark='primaryDark' align='center' font='font'>{title}</StyledText>
            <StyledText fontSize='secondaryText' colorSecondaryDark='secondaryDark' align='center' font='font' style={styles.body}>{description}</StyledText>
            {buttonTitle ? <Button
                title={buttonTitle}
                navigation={navigation}
                route={route}
                buttonDisabled={false}
            />:null}
        </View>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    innerContainerTree: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 70
    },
    background: {
        flex: 1,
        justifyContent: 'center',
        resizeMode: 'cover'
    },
    mushRoomImage: {
        width: 406,
        height: 330,
        alignSelf: 'center',
        marginVertical: 170
    },
    treeImage: {
        position: 'absolute',
        alignSelf: 'center',
        width: 350,
        height: 450,
        top: 0
    }, 
    body: {
        paddingHorizontal: 75
    }
})

export default ImageScreen
