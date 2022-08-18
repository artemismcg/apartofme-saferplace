import React from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import InstructionList from '../../components/Instruction/InstructionList';
import StyledText from '../../components/StyledText.jsx';
import Button from '../../components/CustomButton.jsx';
import ImageUtils from '../../utils/ImageUtils';

const GroundingInstructionScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ImageBackground source = {ImageUtils.getBg('gardenBg1').src} style={styles.background}>
               <StyledText fontSize='title' colorPrimaryDark='primaryDark' font='font' align='center' style={styles.title}>What you'll need for this exercise</StyledText>
               <InstructionList></InstructionList>
               <Button
                title={"I'M READY!"}
                navigation={navigation}
                route={'GroundingStep'}
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
    paddingTop: 125
  }
})

export default GroundingInstructionScreen;