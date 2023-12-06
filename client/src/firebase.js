// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "mern-auth-60e97.firebaseapp.com",
  projectId: "mern-auth-60e97",
  storageBucket: "mern-auth-60e97.appspot.com",
  messagingSenderId: "905226828842",
  appId: "1:905226828842:web:6c5cce948314bf22041753"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);