import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD6M35qpujbCVLhkEgILmXBcDjQCGbF8wM",
  authDomain: "baby-shop-4543e.firebaseapp.com",
  projectId: "baby-shop-4543e",
  storageBucket: "baby-shop-4543e.firebasestorage.app",
  messagingSenderId: "783956449007",
  appId: "1:783956449007:web:e3da9f50655af2ac85ad1a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
