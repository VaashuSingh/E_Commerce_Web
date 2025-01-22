// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrnfRKupX3O3uPiB5zhWR8E7_II6mKFvc",
  authDomain: "ecommerce-1-3683b.firebaseapp.com",
  projectId: "ecommerce-1-3683b",
  storageBucket: "ecommerce-1-3683b.firebasestorage.app",
  messagingSenderId: "430759209053",
  appId: "1:430759209053:web:18e3bda748e41c586185b4",
  measurementId: "G-30HYW3TPZV",
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export { fireDB, auth };
