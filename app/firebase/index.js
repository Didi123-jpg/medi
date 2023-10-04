// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxaDPCGOtAicJo2h6yKxBoRnRCTy7mUrs",
  authDomain: "medicare-2cf83.firebaseapp.com",
  projectId: "medicare-2cf83",
  storageBucket: "medicare-2cf83.appspot.com",
  messagingSenderId: "580581269307",
  appId: "1:580581269307:web:74ea288d71bbcb8f67211e",
  measurementId: "G-CTT6XWQHP3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);