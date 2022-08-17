import React, { useState } from 'react';
import {StyleSheet} from 'react-native';
import RadioButtonRN from 'radio-buttons-react-native';
import theme from '../theme';

const RadioButton = ({data, onSelectItem}) => {
    return (
        <RadioButtonRN 
        data={data}
        box={true}
        animationTypes={['pulse']}
        circleSize={20}
        style={styles.container}
        textStyle={styles.text}
        boxStyle={styles.box}
        activeColor={theme.colors.backgroundDarkBrilliantWhite}
        deactiveColor={theme.colors.backgroundDarkBrilliantWhite}
        boxActiveBgColor={theme.colors.primaryGreen}
        boxDeactiveBgColor={theme.colors.primaryGreenOpacity}
        textColor={theme.colors.backgroundDarkBrilliantWhite}
        duration={300}
        selectedBtn={(e) => onSelectItem(e)}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    box: {
        width: 322,
        height: 64,
        alignSelf: 'center',
        borderRadius: 24,
        border: 1,
        marginTop: 20,
        borderColor: theme.colors.secondaryLightGreenOpacity
    },
    text: {
        fontSize: theme.fontSizes.body,
        fontFamily: theme.fonts.main,
        color: theme.colors.backgroundDarkBrilliantWhite
    }
})

export default RadioButton;