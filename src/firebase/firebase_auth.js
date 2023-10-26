// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyAgK52D-_u250D7EvHkIFxRLJbcwNDBDxU",

  authDomain: "app-mobile-4b4b8.firebaseapp.com",

  databaseURL: "https://app-mobile-4b4b8-default-rtdb.firebaseio.com",

  projectId: "app-mobile-4b4b8",

  storageBucket: "app-mobile-4b4b8.appspot.com",

  messagingSenderId: "475417630004",

  appId: "1:475417630004:web:1e6e9b8cc52c9ff4944161",

  measurementId: "G-7N5F058000"

};


// Initialize Firebase

export const app = initializeApp(firebaseConfig);

export const firebase_auth = getAuth(app);