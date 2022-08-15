import React from 'react'
import { View, StyleSheet, TouchableHighlight } from 'react-native'
import StyledText from './StyledText.jsx'
import RouteUtils from '../utils/RouteUtils.js';

const TextButton = ({navigation, title, route}) => {
    return (
        <View style={styles.container}>
            <TouchableHighlight style={route === null ? styles.buttonBack : styles.buttonInfo}
            onPress={() => route === undefined ? navigation.goBack() : navigation.navigate(RouteUtils.getRoute(route).route)}>
                <StyledText align='center' colorPrimaryDark='primaryDark' font='font' fontSize='secondaryText'>{title}</StyledText>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonInfo: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -110
    },
    buttonBack: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: -100
    }
})

export default TextButton