import initializeFirebase from '../firebase/initialize';
import { getDatabase, ref, get, onValue  } from 'firebase/database';

initializeFirebase
export default getDataFromFirebase = {
    getSwiperOnboardingData: async() =>{
        const db = getDatabase();
        const swiperOnboardingDb = db;
        const swiperOnboardinData = [];
        // const reference = ref(swiperOnboardingDb, 'parentOnboarding');
        await get(ref(swiperOnboardingDb,'parentOnboarding/')).then(snapshot => {
            snapshot.forEach(childSnapshot => {
                const childData = childSnapshot.val();
                swiperOnboardinData.push(childData);
            });
        })
        return swiperOnboardinData
    },
}
