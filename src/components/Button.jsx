import React from 'react'
import { View, StyleSheet, Alert, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import RouteUtils from '../utils/RouteUtils';
import StyledText from './StyledText.jsx'
import theme from '../theme.js'

const Button = ({title, buttonDisabled, navigation, route}) => (
    <View>
        <LinearGradient
            start={styles.linearGradient.startPos}
            end={styles.linearGradient.endPos}
            colors={ buttonDisabled === false ?
                theme.gradients.purpleGradient:
                theme.gradients.greyGradient}
            style={title === 'CONTINUE' ? styles.linearGradient : styles.startButton}>
        <TouchableOpacity disabled={buttonDisabled === undefined || false ? false: buttonDisabled } onPress={() => navigation.navigate(RouteUtils.getRoute(route).route)}>
            <StyledText align='center' colorPrimaryDark='primaryDark' font='font' fontSize='heading'>{title}</StyledText>
        </TouchableOpacity>
        </LinearGradient>
    </View>
)

const styles = StyleSheet.create({
    linearGradient: {
        width: 270,
        height: 65,
        startPos: [0.35, 0],
        endPos: [0, 0],
        borderRadius: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 40,
        marginHorizontal: 70,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 60,
        paddingRight: 60,
        bottom: -45
    },
    startButton: {
        width: 270,
        height: 65,
        borderRadius: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 40,
        marginHorizontal: 70,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 60,
        paddingRight: 60,
        bottom: -10
    }
})

export default Button

