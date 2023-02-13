import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDumtGY1-qm_-Pxibi25CaWHceF3vR6MFc",
    authDomain: "quickpost2-b61fa.firebaseapp.com",
    projectId: "quickpost2-b61fa",
    storageBucket: "quickpost2-b61fa.appspot.com",
    messagingSenderId: "949568729733",
    appId: "1:949568729733:web:c2c8b01f9296c1fa39afec"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db }