// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChL7L8YeledjqM_ybyrWZ_3CVkp_4HvcM",
  authDomain: "so-multas-705ce.firebaseapp.com",
  projectId: "so-multas-705ce",
  storageBucket: "so-multas-705ce.firebasestorage.app",
  messagingSenderId: "28356298221",
  appId: "1:28356298221:web:d7ba039b48be2f176fd3e4",
  measurementId: "G-XQDE2XNDQG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
