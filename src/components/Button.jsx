import React from 'react'
import { View, StyleSheet, Alert, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import RouteUtils from '../utils/RouteUtils';
import StyledText from './StyledText.jsx'
import theme from '../theme.js'

const Button = ({title, navigation, route}) => (
    <View>
        <LinearGradient start={styles.linearGradient.startPos} end={styles.linearGradient.endPos} colors={theme.gradients.purpleGradient} 
        style={title === 'CONTINUE' ? styles.linearGradient : styles.startButton}>
        <TouchableOpacity onPress={() => navigation.navigate(RouteUtils.getRoute(route).route)}>
            <StyledText align='center' colorPrimaryDark='primaryDark' font='font' fontSize='heading'>{title}</StyledText>
        </TouchableOpacity>
        </LinearGradient>
    </View>
)

const styles = StyleSheet.create({
    linearGradient: {
        startPos: [0.35, 0],
        endPos: [0, 0],
        borderRadius: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 40,
        marginHorizontal: 70,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 80,
        paddingRight: 80,
        bottom: -45
    },
    startButton: {
        borderRadius: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 40,
        marginHorizontal: 70,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 80,
        paddingRight: 80,
        bottom: -10
    }
})

export default Button

