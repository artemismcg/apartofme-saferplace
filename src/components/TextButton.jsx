import React from 'react'
import { Image, View, StyleSheet, TouchableHighlight } from 'react-native'
import StyledText from './StyledText.jsx'

const TextButton = ({navigation, route, title, backAction}) => {
    return (
        <View style={styles.container}>
            <TouchableHighlight>
                <StyledText align='center' colorPrimaryDark='primaryDark' font='font' fontSize='secondaryText'>{title}</StyledText>
            </TouchableHighlight>
        </View>
    )
}

/* style this on a theme named styledscreen */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default TextButton