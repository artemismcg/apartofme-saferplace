import initializeFirebase from '../firebase/initialize';
import { getDatabase, ref, get  } from 'firebase/database';

initializeFirebase
export default getDataFromFirebase = {
    getSwiperOnboardingData: async() =>{
        const db = getDatabase();
        const swiperOnboardingDb = db;
        const swiperOnboardinData = [];
        await get(ref(swiperOnboardingDb,'parentOnboarding/')).then(snapshot => {
            snapshot.forEach(childSnapshot => {
                const childData = childSnapshot.val();
                swiperOnboardinData.push(childData);
            });
        })
        return swiperOnboardinData
    },
    getLanguagesData: async() =>{
        const db = getDatabase();
        const languagesDb = db;
        const languagesData = [];
        await get(ref(languagesDb,'language/')).then(snapshot => {
            snapshot.forEach(childSnapshot => {
                const childData = childSnapshot.val();
                languagesData.push(childData);
            });
        })
        return languagesData
    },
}
