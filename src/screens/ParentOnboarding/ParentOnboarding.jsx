import React from "react";
import { View, StyleSheet } from "react-native";
import ImageScreen from "../../components/Image.jsx";

const description = `lorem ipsum dolor sit amet,
consectetur adipiscing elit, sed
do eiusmod tempor incididunt
ut labore et dolore magna`

const ParentOnBoardingPage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageScreen imageToLoad={'SaferPlaceLogo'} backgroundToLoad={'calmBackground'} welcomeText={'WELCOME \n TO A'} title={'Snappy Title here'} description={description} buttonTitle={"GET STARTED"} navigation={navigation}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default ParentOnBoardingPage;