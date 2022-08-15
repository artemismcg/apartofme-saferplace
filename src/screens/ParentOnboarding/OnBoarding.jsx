import React from 'react';
import { View, StyleSheet } from 'react-native';
import SwiperOnBoarding from '../../components/Swiper/SwiperOnBoarding';
const OnBoarding = ({navigation}) => {
    return (
        <View style={styles.container}>
            <SwiperOnBoarding navigation={navigation} route={'IntroductionToGroundingExercise'}/>
        </View>
    )
}
export default OnBoarding;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})