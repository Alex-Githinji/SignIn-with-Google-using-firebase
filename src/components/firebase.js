// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { Firestore, getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNW2yx-H_ar7Hj6iN46-GtGgTitei0wkY",
  authDomain: "fir-auth-15060.firebaseapp.com",
  projectId: "fir-auth-15060",
  storageBucket: "fir-auth-15060.appspot.com",
  messagingSenderId: "333064379565",
  appId: "1:333064379565:web:c859b9dc1e6119757c3a24",
  measurementId: "G-KQE7Y4R96B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;