import React from 'react'
import { Image, View, StyleSheet } from 'react-native'
import StyledText from '../StyledText.jsx'
import ImageUtils from '../../utils/ImageUtils.js'

const InstructionItem = ({title, body, image}) => {
    return (
        <View style={styles.item}>
            <Image source = {ImageUtils.getImageInstruction(image).image} style={styles.image}/>
            <StyledText align='center' colorPrimaryDark='primaryDark' font='font' fontSize='tertiaryText'>{title}</StyledText>
            <StyledText align='center' colorPrimaryDark='secondaryDark' font='font' fontSize='tertiaryText'>{body}</StyledText>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 8,
        marginHorizontal: 16
    },
    image: {
        width: 88,
        height: 95

    }
})

export default InstructionItem