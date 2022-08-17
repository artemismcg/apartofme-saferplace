import React from 'react';
import {View, StyleSheet, Image, ImageBackground, KeyboardAvoidingView, ScrollView} from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';
import StyledText from '../../components/StyledText';
import CustomTextInput from '../../components/CustomTextInput';
import Button from '../../components/CustomButton';
import ImageUtils from '../../utils/ImageUtils';

const description = `What part of your feet feel most connected to the earth?`

const GroundingInstructionScreen = ({navigation}) => {
    const headerHeight = useHeaderHeight();
    
    return (
        <View style={styles.container}>
            <ImageBackground source = {ImageUtils.getBg('gardenBg1').src} style={styles.background}>
                <StyledText fontSize='title' colorPrimaryDark='primaryDark' font='font' align='left' style={styles.title}>{description}</StyledText>
                <CustomTextInput style={styles.textInput}/>
                <Button style={styles.button}
                title={"CONTINUE"}
                navigation={navigation}
                route={''}
                buttonDisabled={false}
                />
            <Image source={require('../../../assets/groundingExercises/mushroom.png')}  style={styles.image}/>
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
    image: {
        position: 'absolute',
        width: 350,
        height: 350,
        zIndex: 2,
        elevation: 2,
        bottom: -10,
        left: 20
    },  
    title: {
        paddingHorizontal: 50,
        paddingBottom: 50,
        marginBottom: -30
    }
})

export default GroundingInstructionScreen;