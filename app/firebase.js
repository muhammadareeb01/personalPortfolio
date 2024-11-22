// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBFWGuJiWvUloboEPCJtiIZ6CHpR4Vf9ss",
  authDomain: "personalportfolioareeb.firebaseapp.com",
  projectId: "personalportfolioareeb",
  storageBucket: "personalportfolioareeb.firebasestorage.app",
  messagingSenderId: "398884398913",
  appId: "1:398884398913:web:5908fa288433bfa9a723c0",
  measurementId: "G-S1VCYC8PKQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);