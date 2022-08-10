import React from 'react'
import { View, StyleSheet, ImageBackground } from 'react-native'
import CarouselCards from './Carousel/CarouselCards.jsx'
import StyledText from './StyledText.jsx'


const FaqGallery = ({navigation, backgroundToLoad, title, description, questions, responses}) => {
    return (
        <View style={styles.container}>
            {backgroundToLoad === 'aboutGroundingExercise' ? <ImageBackground source={(require('../../assets/AboutGroundingExercise.png'))} style={styles.background}>
                <View>
                    <StyledText fontSize='largeTitle' colorPrimaryDark='primaryDark' align='center' font='font' style={styles.title}>{title}</StyledText>
                    <StyledText fontSize='secondaryText' colorSecondaryDark='secondaryDark' align='center' font='font' textPadding='textPadding'>{description}</StyledText>
                    <CarouselCards/>
                    <StyledText fontSize='secondaryText' colorPrimaryDark='PrimaryDark' align='left' font='font' textPadding='textPadding' style={styles.response}>
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Cras quis vehicula risus. Proin in
                    velit at ex pretium sagittis. 
                    Praesent at mauris
                    </StyledText>
                </View>
            </ImageBackground>:null}
        </View>
    )
} 

/* style this on a theme named styledscreen */

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    background: {
        flex: 1,
        resizeMode: 'cover'
    },
    title: {
        paddingTop: 160
    },
    response: {
        paddingHorizontal: 100,
        flexDirection: 'row',
        flexShrink: 1,
    }
})

export default FaqGallery