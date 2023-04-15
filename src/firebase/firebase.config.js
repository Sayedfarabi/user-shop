// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBalTOMQ-pikqu1SRJvItwudFPW3vhDfYQ",
    authDomain: "user-shop.firebaseapp.com",
    projectId: "user-shop",
    storageBucket: "user-shop.appspot.com",
    messagingSenderId: "277104746815",
    appId: "1:277104746815:web:8cd529aa191750b46d338a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;