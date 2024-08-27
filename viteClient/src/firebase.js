// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-11946.firebaseapp.com",
  projectId: "mern-estate-11946",
  storageBucket: "mern-estate-11946.appspot.com",
  messagingSenderId: "971836984241",
  appId: "1:971836984241:web:38e52abb996531ccd38b90"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);