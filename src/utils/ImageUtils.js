import { backgrounds, userSelectedData, instructionImages, onBoardingImages  } from '../data/ImagesData'

export default imageUtils = {
    getBg: (bgName) =>{
        return backgrounds.find((background) => background.bg === bgName)
    },
    getImageUserSelected: (userName) =>{
        return userSelectedData.find((user) => user.name === userName)
    },
    getImageInstruction: (imageName) =>{
        return instructionImages.find((image) => image.name === imageName)
    },
    getSwiperOnboarding: (imageName) =>{
        return onBoardingImages.find((image) => image.name === imageName)
    },
}