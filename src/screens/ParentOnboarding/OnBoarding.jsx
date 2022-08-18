import React from 'react';
import { View, StyleSheet } from 'react-native';
import SwiperOnBoarding from '../../components/Swiper/SwiperOnBoarding';
import SwiperOnBoardingData from '../../data/SwiperOnboardingData'
import getData from '../../services/getData';
import ImageUtils from '../../utils/ImageUtils';

let swiperData = []
async function getSwiperData() {
    try {
        swiperData = await getData.getSwiperOnboardingData();
    } catch (error) {
        swiperData = SwiperOnBoardingData
    }
    swiperData.map(item => {
        item.image = ImageUtils.getSwiperOnboarding(item.imageName).image
    })}
getSwiperData();

const OnBoarding = ({navigation}) => {
    return (
        <View style={styles.container}>
            <SwiperOnBoarding swiperData={swiperData} navigation={navigation} route={'IntroductionToGroundingExercise'}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default OnBoarding;
