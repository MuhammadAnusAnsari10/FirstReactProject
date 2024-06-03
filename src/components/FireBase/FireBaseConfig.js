import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCDgA4C__OFcbEOy5Y2_wMdENfdV9I7FGo",
  authDomain: "fir-learning-d94e5.firebaseapp.com",
  projectId: "fir-learning-d94e5",
  storageBucket: "fir-learning-d94e5.appspot.com",
  messagingSenderId: "210993793052",
  appId: "1:210993793052:web:6f000f7d55275f25e9b7d9",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
