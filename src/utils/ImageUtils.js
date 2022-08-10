import backgrounds from '../data/ImagesData'
export default imageUtils = {
    getBg: (bgName) =>{
        return backgrounds.find((background) => background.bg === bgName)
    }   
}