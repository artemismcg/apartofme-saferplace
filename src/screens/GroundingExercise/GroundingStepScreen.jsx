import React from 'react';
import {View, StyleSheet, Image, ImageBackground} from 'react-native';
import DialogBox from '../../components/DialogBox';
import Button from '../../components/CustomButton';
import ImageUtils from '../../utils/ImageUtils';
import InstructionUtils from '../../utils/InstructionUtils';

const GroundingInstructionScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ImageBackground source = {ImageUtils.getBg('gardenBg1').src} style={styles.background}>
               <DialogBox body={InstructionUtils.getStep('Grounding', 1).body}/>
               <Button style={styles.button}
                title={"CONTINUE"}
                navigation={navigation}
                route={'GroundingButtonInput'}
                buttonDisabled={false}
               />
               <Image source={require('../../../assets/groundingExercises/guide.png')} style={styles.image}/>
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
        width: 400,
        height: 454,
        zIndex: 2,
        elevation: 2,
        bottom: -10,
        left: 30
    }
})

export default GroundingInstructionScreen;