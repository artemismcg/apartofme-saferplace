import React from 'react'
import { View, StyleSheet, Alert, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import StyledText from './StyledText.jsx'
import theme from '../theme.js'
import routes from '../data/route'

function getRoute(route){
    return routes.find((r) => r.route === route)
}

const Button = ({title, navigation, route}) => (
    <View>
        <LinearGradient start={styles.linearGradient.startPos} end={styles.linearGradient.endPos} colors={theme.gradients.purpleGradient} 
        style={title === 'CONTINUE' ? styles.linearGradient : styles.startButton}>
        <TouchableOpacity onPress={() => navigation.navigate(getRoute(route).route)}>
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
        marginVertical: 20,
        marginHorizontal: 70,
        paddingTop: 15,
        paddingBottom: 15,
        bottom: -75
    },
    startButton: {
        borderRadius: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        marginHorizontal: 70,
        paddingTop: 15,
        paddingBottom: 15,
        bottom: -35
    }
})

export default Button

