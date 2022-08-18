import React, {  useState } from 'react';
import { View, Image, StyleSheet, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import ImageUtils from '../../utils/ImageUtils'
import Button from '../../components/CustomButton.jsx'
import StyledText from '../../components/StyledText.jsx'

const UserSelection = ({navigation}) => {
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
            <StyledText fontSize='title' colorPrimaryDark='primaryDark' align='left' font='font' style={styles.title}>Please select user type</StyledText>
            <View style={styles.innerContainer}>
                <TouchableWithoutFeedback   onPress={() => grownUpUser()}>
                    { grownUpSelected }
                </TouchableWithoutFeedback >
                <TouchableWithoutFeedback  onPress={() => childUser()}>
                    { childSelected }
                </TouchableWithoutFeedback >
            </View>
            <Button
                title={'CONFIRM'}
                navigation={navigation}
                buttonDisabled={btnDisabled}
                route={'OnBoarding'}
            />
            </ImageBackground>
        </View>
    )
}
export default UserSelection;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 130
    },
    background: {
        flex: 1,
        justifyContent: 'center',
        resizeMode: 'cover'
    },
    largeCard1: {
        width: 310,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginBottom: 20
    },
    largeCard2: {
        width: 310,
        resizeMode: 'contain',
        marginTop: -150,
        alignSelf: 'center'
    },
    title: {
        paddingHorizontal: 20,
        marginTop: 110
    }
})