import React, { useState } from 'react';
import {View, StyleSheet, Text, ImageBackground} from 'react-native';
import StyledText from '../../components/StyledText';
import RadioButton from '../../components/RadioButton';
import Button from '../../components/CustomButton';
import ImageUtils from '../../utils/ImageUtils';
import { languages } from '../../data/RadioButtonData';
import getData from '../../services/getData';

const description = `Please select your language`
let languagesData = [];
async function getLanguages() {
    try {
        languagesData = await getData.getLanguagesData();
    } catch (error) {
        languagesData = languages;
    }
}
getLanguages();

const LanguageSelectionScreen = ({navigation}) => {
    const [childData, setChildData] = useState("");
    const [btnDisabled, setBtnDisabled] = useState(true)
    const languageSelected = (item) => {
        setChildData(item.label)
        setBtnDisabled(false)
        // set language selected in database
    }
    return (
        <View style={styles.container}>
            <ImageBackground source = {ImageUtils.getBg('calmBackground').src} style={styles.background}>
                <StyledText fontSize='title' colorPrimaryDark='primaryDark' font='font' align='left' style={styles.title}>{description}</StyledText>
                <RadioButton style={styles.radioButton}
                data={languagesData} screen={'selectLanguage'} onSelectItem={languageSelected}/>
                <Button style={styles.button}
                title={"CONFIRM"}
                navigation={navigation}
                route={'SelectUser'}
                buttonDisabled={btnDisabled}
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