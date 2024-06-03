// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDdZnr1W7MPbDsuUq9ndwYOy0-p3JzygLA",
  authDomain: "react-movie-app-5599c.firebaseapp.com",
  projectId: "react-movie-app-5599c",
  storageBucket: "react-movie-app-5599c.appspot.com",
  messagingSenderId: "399284981474",
  appId: "1:399284981474:web:9385634222d47b11c818bb",
  measurementId: "G-39NYNZHJ9P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const firebaseAuth=getAuth(app);