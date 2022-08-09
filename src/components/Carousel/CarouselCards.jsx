import React from 'react'
import { View, StyleSheet} from "react-native"
import Carousel, { Pagination } from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CardItem'
import CarouselData from '../../data/CarouselData'
import theme from '../../theme.js'
import StyledText from '../../components/StyledText.jsx'

const CarouselCards = (questions, responses) => {
  const [index, setIndex] = React.useState(0)
  const isCarousel = React.useRef(null)

  return (
    <View>
        <Carousel
            layout="default"
            layoutCardOffset={2}
            ref={isCarousel}
            data={CarouselData}
            renderItem={CarouselCardItem}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
            onSnapToItem={(index) => setIndex(index)}
            useScrollView={true}
        />
        <Pagination
            containerStyle={{paddingTop: 0}}
            dotsLength={CarouselData.length}
            activeDotIndex={index}
            dotStyle={{
                width: 32,
                height: 8,
                borderRadius: 5,
                backgroundColor: theme.colors.secondaryLightPink
            }}
            inactiveDotStyle={{
                width: 8,
                height: 8,
                borderRadius: 5,
                backgroundColor: theme.colors.backgroundDarkBrilliantWhite
            }}
            inactiveDotOpacity={1}
            inactiveDotScale={1}
        />
    </View>
  )
}

export default CarouselCards