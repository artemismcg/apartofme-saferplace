import React from 'react'
import { View, StyleSheet, ImageBackground } from 'react-native'
import CarouselCards from './Carousel/CarouselCards.jsx'
import TextButton from './TextButton.jsx'
import StyledText from './StyledText.jsx'


const FaqGallery = ({navigation, title, description, questions, responses}) => {
    return (
        <View style={styles.container}>
            <TextButton
            title={'BACK'}
            navigation={navigation}
            />
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
    )
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        marginTop: -30
    },
    response: {
        flexShrink: 1,
        flexDirection: 'row',
        marginTop: -475,
        paddingHorizontal: 100
    }
})

export default FaqGallery