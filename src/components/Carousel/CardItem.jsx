import React from 'react'
import { View, StyleSheet, Dimensions } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
import StyledText from '../../components/StyledText'
import theme from '../../theme.js'

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
        <LinearGradient start={styles.linearGradient.startPos} end={styles.linearGradient.endPos} colors={theme.gradients.purpleGradient} style={styles.linearGradient}>
            <StyledText fontSize='largeTitle' colorPrimaryDark='primaryDark' align='center' font='font'>{item.title}</StyledText>
        </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: ITEM_WIDTH,
    marginVertical: 30
  },
  linearGradient: {
    startPos: [0, 0.25],
    endPos: [0, 1],
    borderRadius: 24,
    justifyContent: 'center',
    width: 310,
    height: 200
  }
})

export default CarouselCardItem