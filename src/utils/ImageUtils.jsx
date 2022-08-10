import backgrounds from '../data/ImagesData'

export default {
    getBg: (bgName) =>{
        return backgrounds.find((background) => background.bg === bgName)
    }
}