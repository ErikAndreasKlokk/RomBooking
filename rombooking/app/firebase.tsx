import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_APIKEY,
    authDomain: "rombooking-6e184.firebaseapp.com",
    projectId: "rombooking-6e184",
    storageBucket: "rombooking-6e184.appspot.com",
    messagingSenderId: "524540107538",
    appId: "1:524540107538:web:9170524922897420bd31cb"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app)
  export const db = getFirestore(app)