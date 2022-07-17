// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "twitter-v4-3ca93.firebaseapp.com",
  projectId: "twitter-v4-3ca93",
  storageBucket: "twitter-v4-3ca93.appspot.com",
  messagingSenderId: "209099254205",
  appId: "1:209099254205:web:bd3b8788494a2edf47cad4"
};


// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export { app, db, storage };
