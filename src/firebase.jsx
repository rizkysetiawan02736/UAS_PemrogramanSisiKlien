import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "store-tutorial-478bf.firebaseapp.com",
  projectId: "store-tutorial-478bf",
  storageBucket: "store-tutorial-478bf.appspot.com",
  messagingSenderId: "35413930271",
  appId: "1:35413930271:web:ba0100cb07654dac5c402a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);
