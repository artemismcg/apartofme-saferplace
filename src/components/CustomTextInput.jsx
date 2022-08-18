
import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import theme from '../theme.js';

const CustomTextInput = () => {
    return (
        <TextInput 
            mode=''
            placeholder='Enter text here'
            placeholderTextColor={theme.colors.backgroundDarkBrilliantWhite}
            selectionColor={theme.colors.backgroundDarkBrilliantWhite}
            style={[styles.area, styles.shadow, styles.text]}
        />
    )
}

const styles = StyleSheet.create({
    area: {
        width: 327,
        height: 225,
        alignSelf: 'center',
        borderWidth: 1,
        borderRadius: 16,
        borderColor: theme.colors.secondaryLightGreenOpacity,
        backgroundColor: theme.colors.primaryGreenOpacity,
        marginBottom: 110
    },
    shadow: {
        shadowColor: 'rgba(26, 26, 26, 0.15)',
        shadowRadius: 3,
        shadowOffset: {width: -4, height: 20}
    },
    text: {
        fontFamily: theme.fonts.main,
        fontSize: theme.fontSizes.tertiaryText,
        color: theme.colors.backgroundDarkBrilliantWhite,
        textAlignVertical: 'top',
        paddingTop: 20,
        paddingLeft: 10
    }
})

export default CustomTextInput;