import React from 'react';
import {View, StyleSheet, Image, ImageBackground} from 'react-native';
import StyledText from '../../components/StyledText';
import RadioButton from '../../components/RadioButton';
import Button from '../../components/CustomButton';
import ImageUtils from '../../utils/ImageUtils';
import TwoOptions from '../../data/RadioButtonData'

const description = `Did you notice the sensations in your feet where they connected with the ground?`

const GroundingInstructionScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ImageBackground source = {ImageUtils.getBg('gardenBg1').src} style={styles.background}>
                <StyledText fontSize='title' colorPrimaryDark='primaryDark' font='font' align='left' style={styles.title}>{description}</StyledText>
                <RadioButton style={styles.radioButton}
                data={TwoOptions}/>
                <Button style={styles.button}
                title={"CONTINUE"}
                navigation={navigation}
                route={''}
                buttonDisabled={true}
                />
               <Image source={require('../../../assets/dialogs/fern.png')} style={styles.image}/>
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
        width: 230,
        height: 430,
        zIndex: 2,
        elevation: 2,
        bottom: -10,
        left: 30
    },  
    title: {
        paddingHorizontal: 50,
        marginTop: 120,
        marginBottom: -270
    }
})

export default GroundingInstructionScreen;