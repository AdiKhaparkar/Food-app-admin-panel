import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAKO-R-i_du7y9PoJGrKh97IQNFwgYdT8I",
  authDomain: "foodappproject1-11c65.firebaseapp.com",
  projectId: "foodappproject1-11c65",
  storageBucket: "foodappproject1-11c65.appspot.com",
  messagingSenderId: "285973874941",
  appId: "1:285973874941:web:ffe1b2abd06be0e1725694",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);


export {db, storage};