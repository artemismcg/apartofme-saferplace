import React from 'react'
import { View, StyleSheet, Image, ImageBackground } from "react-native"
import ImageUtils from '../../utils/ImageUtils'
import StyledText from '../../components/StyledText'
import Button from '../CustomButton'

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
                    textPadding='textPaddingHorizontal'
                    style={styles.title}
                >
                {item.title}
                </StyledText>
                <StyledText
                    fontSize='secondaryText'
                    colorSecondaryDark='secondaryDark'
                    align='center' 
                    font='font'
                    textPadding='textPadding'
                    style={styles.body}
                >
                    {item.description}
                </StyledText>
            </View>
            <View>
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
    background: {
        flex: 1,
        justifyContent: 'center',
        resizeMode: 'cover',
        width: '100%',
    },
    image: {
        width: 240,
        alignSelf: 'center',
        justifyContent: 'space-between'
    },
    title: {
        paddingTop: 30,
        paddingBottom: 10
    },
    body: {
        paddingHorizontal: 50,
        paddingBottom: 30
    }
  })
  
  export default SwiperOnBoardingItem