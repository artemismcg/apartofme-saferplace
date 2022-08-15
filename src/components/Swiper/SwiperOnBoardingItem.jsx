import React from 'react'
import { View, StyleSheet, Image, ImageBackground } from "react-native"
import ImageUtils from '../../utils/ImageUtils'
import StyledText from '../../components/StyledText'
import Button from '../../components/Button'

const SwiperOnBoardingItem = ({ item, index, route, navigation}) => {
    return (
      <View style={styles.container} key={index}>
        <ImageBackground source = {ImageUtils.getBg('calmBackground').src} style={styles.background}>
            <Image style={item.style} source={item.image} />
            <View>
                <StyledText
                    fontSize='largeTitle'
                    colorPrimaryDark='primaryDark'
                    align='center'
                    font='font'
                    textPadding='textPadding'>
                        {item.title}
                </StyledText>
                <StyledText
                    fontSize='secondaryText'
                    colorSecondaryDark='secondaryDark'
                    align='center' font='font'
                    textPadding='textPadding'>
                    {item.description}
                </StyledText>
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title={'NEXT'}
                    buttonDisabled={false}
                    route={route}
                    navigation={navigation}
                />
            </View>
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
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // width: '100%',
        marginHorizontal: -20,
        // paddingVertical: -10,
        marginTop: 20
    },
    background: {
        flex: 1,
        justifyContent: 'center',
        resizeMode: 'cover',
        width: '100%',
    },
    image: {
        width: 248,
        // height: 310,
        alignSelf: 'center',
        marginTop: 100,
    }
  })
  
  export default SwiperOnBoardingItem