// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIwksSeUoFbp429jxCP9-Hqh0OUVZNkNI",
  authDomain: "otakumania-f6598.firebaseapp.com",
  projectId: "otakumania-f6598",
  storageBucket: "otakumania-f6598.appspot.com",
  messagingSenderId: "120563658722",
  appId: "1:120563658722:web:fea4cefc5409d9100093bb",
  measurementId: "G-CJSNP0MN24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);