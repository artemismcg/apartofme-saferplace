import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import TypeWriter from 'react-native-typewriter';
import StyledText from './StyledText.jsx';
import theme from '../theme.js';

const DialogBox = ({body}) => {
    return (
        <View style={styles.container}>
            <LinearGradient 
            start={styles.textArea.startPos} 
            end={styles.textArea.endPos} 
            colors={theme.gradients.purpleLightGradient} 
            style={styles.textArea}>
            <StyledText fontSize='heading' colorPrimaryDark='primaryDark' align='center' font='font' style={styles.text}>{body}</StyledText>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 80,
        marginBottom: -25
    },
    textArea: {
        startPos: [0, 0],
        endPos: [0, 1],
        borderRadius: 24,
        justifyContent: 'center',
        width: 310,
        height: 470,
        borderTopLeftRadius: 80,
        borderTopRightRadius: 24,
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 80
    },
    text: {
        paddingBottom: 310 / 1.5,
        paddingHorizontal: 20
    }
})

export default DialogBox