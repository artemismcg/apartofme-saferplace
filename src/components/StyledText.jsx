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
    tertiaryText: {
        fontSize: theme.fontSizes.tertiaryText
    },
    textAlignCenter: {
        textAlign: 'center'
    },
    textAlignLeft: {
        textAlign: 'left'
    },
    textPadding: {
        paddingTop: 10,
    },
    welcomeTextParentOnboardingMargin: {
        marginTop: 50,
    },
    textPaddingParentOnboarding: {
        paddingTop:100,
    },
    textPaddingHorizontal: {
        paddingHorizontal: 40
    }
})

export default function StyledText ({ align, font, colorPrimaryDark, colorPrimaryLight, colorSecondaryDark, colorSecondaryLight,
     title, largeTitle, secondaryText, tertiaryText, children, color, fontSize, fontWeight, textPadding, welcomeTextParentOnboardingMargin,
     textPaddingParentOnboarding, style, ...restOfProps }) {
    const textStyles = [
      styles.text,
      align === 'center' && styles.textAlignCenter,
      align === 'left' && styles.textAlignLeft,
      font === 'font' && styles.fontFamily,
      colorPrimaryDark === 'primaryDark' && styles.colorPrimaryDark,
      colorPrimaryLight === 'primaryLight' && styles.colorPrimaryLight,
      colorSecondaryDark == 'secondaryDark' && styles.colorSecondaryDark,
      colorSecondaryLight == 'secondaryLight' && styles.colorSecondaryLight,
      color === 'secondary' && styles.colorSecondary,
      fontSize === 'heading' && styles.heading,
      fontWeight === 'bold' && styles.bold,
      fontSize === 'title' && styles.title,
      fontSize === 'largeTitle' && styles.largeTitle,
      fontSize === 'secondaryText' && styles.secondaryText,
      fontSize === 'tertiaryText' && styles.tertiaryText,
      textPadding === 'textPadding' && styles.textPadding,
      textPadding === 'textPaddingHorizontal' && styles.textPaddingHorizontal,
      welcomeTextParentOnboardingMargin === 'welcomeTextParentOnboardingMargin' && styles.welcomeTextParentOnboardingMargin,
      textPaddingParentOnboarding === 'textPaddingParentOnboarding' && styles.textPaddingParentOnboarding,
      style
    ]
  
    return (
      <Text style={textStyles} {...restOfProps}>
        {children}
      </Text>
    )
}