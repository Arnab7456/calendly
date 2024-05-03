// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_URL,
  authDomain: "meeting-7c66a.firebaseapp.com",
  projectId: "meeting-7c66a",
  storageBucket: "meeting-7c66a.appspot.com",
  messagingSenderId: "8272150698",
  appId: "1:8272150698:web:40b99859ddc226b5bf50d3",
  measurementId: "G-YDSQJ0X3G5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);