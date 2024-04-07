// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQ6w5_XU_7l0ttyaUHRp8j7oeSCJt1ODE",
  authDomain: "react-dragon-news-auth-1e2d6.firebaseapp.com",
  projectId: "react-dragon-news-auth-1e2d6",
  storageBucket: "react-dragon-news-auth-1e2d6.appspot.com",
  messagingSenderId: "246801188043",
  appId: "1:246801188043:web:a9f9e405013e3013e4074e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;