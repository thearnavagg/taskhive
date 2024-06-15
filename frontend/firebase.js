// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
    authDomain: "taskhive-84bcb.firebaseapp.com",
    projectId: "taskhive-84bcb",
    storageBucket: "taskhive-84bcb.appspot.com",
    messagingSenderId: "509040889675",
    appId: "1:509040889675:web:392c33f165bd3c788162ce",
    measurementId: "G-BHMBBTFKH3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);