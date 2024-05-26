// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7VPYvxd4fbnXbwzwWLFHNeGjgCxYu_mM",
  authDomain: "nwitter-reloaded-3b19d.firebaseapp.com",
  projectId: "nwitter-reloaded-3b19d",
  storageBucket: "nwitter-reloaded-3b19d.appspot.com",
  messagingSenderId: "965544693093",
  appId: "1:965544693093:web:1678c778256300bc07e58c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);