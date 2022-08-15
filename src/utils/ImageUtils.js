import {backgrounds, userSelectedData } from '../data/ImagesData'
export default imageUtils = {
    getBg: (bgName) =>{
        return backgrounds.find((background) => background.bg === bgName)
    },
    getImageUserSelected: (userName) =>{
        return userSelectedData.find((user) => user.name === userName)
    }
}