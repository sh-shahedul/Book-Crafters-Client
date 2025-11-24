// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjs7PSWf3KCxWs8NbdVGFWm7iQ9xMhNqE",
  authDomain: "book-crafter.firebaseapp.com",
  projectId: "book-crafter",
  storageBucket: "book-crafter.firebasestorage.app",
  messagingSenderId: "1048237005334",
  appId: "1:1048237005334:web:a930ac6e9be81593423337"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);