import React from 'react';
import {View, StyleSheet, Image, ImageBackground} from 'react-native';
import StyledText from '../../components/StyledText';
import RadioButton from '../../components/RadioButton';
import Button from '../../components/CustomButton';
import ImageUtils from '../../utils/ImageUtils';
import { languages } from '../../data/RadioButtonData'

const description = `Please select your language`

const LanguageSelectionScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ImageBackground source = {ImageUtils.getBg('calmBackground').src} style={styles.background}>
                <StyledText fontSize='title' colorPrimaryDark='primaryDark' font='font' align='left' style={styles.title}>{description}</StyledText>
                <RadioButton style={styles.radioButton}
                data={languages}/>
                <Button style={styles.button}
                title={"CONFIRM"}
                navigation={navigation}
                route={''}
                buttonDisabled={false}
                />
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    background: {
        flex: 1,
        justifyContent: 'center',
        resizeMode: 'cover'
    },  
    title: {
        paddingHorizontal: 50,
        marginTop: 120,
        marginBottom: -240
    }
})

export default LanguageSelectionScreen;