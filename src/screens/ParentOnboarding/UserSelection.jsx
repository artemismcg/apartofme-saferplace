import React, {  useState } from 'react';
import { View, Image, StyleSheet, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import ImageUtils from '../../utils/ImageUtils'
import Button from '../../components/Button.jsx'
import StyledText from '../../components/StyledText.jsx'

const GroundingExercisePage = ({navigation}) => {
    const [grownUpSelected, setGrownUpSelected] = useState(<Image style={styles.largeCard1} source={ ImageUtils.getImageUserSelected('grownUp').image}/>)
    const [childSelected, setChildSelected] = useState(<Image style={styles.largeCard2} source={ ImageUtils.getImageUserSelected('child').image}/>)
    const [btnDisabled, setBtnDisabled] = useState(true)
    function grownUpUser(){
        setGrownUpSelected(<Image style={styles.largeCard1} source={ ImageUtils.getImageUserSelected('grownUpSelected').image}/>)
        setChildSelected(<Image style={styles.largeCard2} source={ ImageUtils.getImageUserSelected('child').image}/>)
        setBtnDisabled(false)
    }
    function childUser(){
        setGrownUpSelected(<Image style={styles.largeCard1} source={ ImageUtils.getImageUserSelected('grownUp').image}/>)
        setChildSelected(<Image style={styles.largeCard2} source={ ImageUtils.getImageUserSelected('childSelected').image}/>)
        setBtnDisabled(false)
    }
    return (
        <View style={styles.container}>
            <ImageBackground source = {ImageUtils.getBg('calmBackground').src} style={styles.background}>
            <StyledText fontSize='title' colorPrimaryDark='primaryDark' align='center' font='font'>Please select user type</StyledText>
                <TouchableWithoutFeedback   onPress={() => grownUpUser()}>
                    { grownUpSelected }
                </TouchableWithoutFeedback >
                <TouchableWithoutFeedback  onPress={() => childUser()}>
                    { childSelected }
                </TouchableWithoutFeedback >
                <Button
                    title={'CONFIRM'}
                    navigation={navigation}
                    buttonDisabled={btnDisabled}
                    route={'Home'}
                />
            </ImageBackground>
        </View>
    )
}
export default GroundingExercisePage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
        justifyContent: 'center',
        resizeMode: 'cover'
    },
    largeCard1: {
        marginLeft: 20,
        width: 350,
        resizeMode: 'contain',
    },
    largeCard2: {
        marginLeft: 20,
        width: 350,
        resizeMode: 'contain',
        marginTop: -100,
    },
})