// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNXw9j_tvc4SIbg11hXWTEwK8UfwpYpgY",
  authDomain: "so-multas-65d08.firebaseapp.com",
  projectId: "so-multas-65d08",
  storageBucket: "so-multas-65d08.firebasestorage.app",
  messagingSenderId: "932114409025",
  appId: "1:932114409025:web:bf4249cab63e57ff5ac8c0",
  measurementId: "G-T6DQ0C10XP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
