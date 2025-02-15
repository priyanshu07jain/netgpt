// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzoE98-KqFBuFKPhEoBwSNQkO7rq_2_Ds",
  authDomain: "netflixgpt-6b935.firebaseapp.com",
  projectId: "netflixgpt-6b935",
  storageBucket: "netflixgpt-6b935.firebasestorage.app",
  messagingSenderId: "864419102388",
  appId: "1:864419102388:web:e4b83aef223bc70f5ae1e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();