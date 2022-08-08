import React from 'react'
import { Text, StyleSheet } from 'react-native'
import theme from '../theme.js'

const styles = StyleSheet.create({
    text: {
        color: theme.colors.backgroundDarkLightGrey,
        fontSize: theme.fontSizes.body,
        fontFamily: 'Poppins-Regular',
        fontWeight: theme.fontWeights.normal
    },
    font: {
        fontFamily: 'Poppins-Regular'
    },
    colorPrimaryDark: { 
        color: theme.colors.backgroundDarkBrilliantWhite
    },
    colorPrimaryLight: {
        color: theme.colors.backgroundLightDarkGrey
    },
    colorSecondaryDark: {
        color: theme.colors.backgroundDarkLightGrey
    },
    colorSecondaryLight: {
        color: theme.colors.backgroundLightMediumGrey
    },
    bold: {
        fontWeight: theme.fontWeights.bold
    },
    largeTitle: {
        fontSize: theme.fontSizes.largeTitle
    },
    title: {
        fontSize: theme.fontSizes.title
    },
    heading: {
        fontSize: theme.fontSizes.heading
    },
    secondaryText: {
        fontSize: theme.fontSizes.secondaryText
    },
    textAlignCenter: {
        textAlign: 'center'
    },
    textPadding: {
        paddingTop: 10,
    }
})

export default function StyledText ({ align, font, colorPrimaryDark, colorPrimaryLight, colorSecondaryDark, colorSecondaryLight,
     largeTitle, secondaryText, children, color, fontSize, fontWeight, textPadding, style, ...restOfProps }) {
    const textStyles = [
      styles.text,
      align === 'center' && styles.textAlignCenter,
      font === 'font' && styles.fontFamily,
      colorPrimaryDark === 'primaryDark' && styles.colorPrimaryDark,
      colorPrimaryLight === 'primaryLight' && styles.colorPrimaryLight,
      colorSecondaryDark == 'secondaryDark' && styles.colorSecondaryDark,
      colorSecondaryLight == 'secondaryLight' && styles.colorSecondaryLight,
      color === 'secondary' && styles.colorSecondary,
      fontSize === 'heading' && styles.heading,
      fontWeight === 'bold' && styles.bold,
      fontSize === 'largeTitle' && styles.largeTitle,
      fontSize === 'secondaryText' && styles.secondaryText,
      textPadding === 'textPadding' && styles.textPadding,
      style
    ]
  
    return (
      <Text style={textStyles} {...restOfProps}>
        {children}
      </Text>
    )
}