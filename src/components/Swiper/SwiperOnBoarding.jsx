import React from 'react'
import { View, Text, StyleSheet} from "react-native"
import SwiperOnBoardingData from '../../data/SwiperOnboardingData'
import SwiperOnBoardingItem from './SwiperOnBoardingItem'
import Swiper from 'react-native-swiper'
import theme from '../../theme'

const SwiperOnBoarding = ({navigation, route}) => {
    return (
        <View style={styles.container}>
            <Swiper
                style={styles.element}
                paginationStyle= {styles.pagination}
                activeDotColor={ theme.colors.secondaryLightPink}
                dotColor={theme.colors.backgroundDarkBrilliantWhite}
                activeDotStyle={styles.activeDot}
                >
                {SwiperOnBoardingData.map((item, index) => {
                    return (
                        <SwiperOnBoardingItem item={item} index={index} key={index} route={route} navigation= {navigation}>
                        </SwiperOnBoardingItem>
                    )
                })}
            </Swiper>
        </View>
    )
}
export default SwiperOnBoarding;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    pagination: {
        bottom: 150,
    },
    activeDot: {
        width: 32,
        height: 8
    }
})


