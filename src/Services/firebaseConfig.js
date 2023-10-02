
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firebase-firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCkJl1gCKJD9a1wxSfUtpwYxKNFxMARDlY",
  authDomain: "chatgroup-c9c27.firebaseapp.com",
  projectId: "chatgroup-c9c27",
  storageBucket: "chatgroup-c9c27.appspot.com",
  messagingSenderId: "927029161377",
  appId: "1:927029161377:web:b51c8f89b8e8cf6698efe0",
  measurementId: "G-TVBWZ0DL7E"
};


export const App = initializeApp(firebaseConfig);
export const Analytics = getAnalytics(App);
export const Auth = getAuth(App);
export const BdApp = getFirestore(App);