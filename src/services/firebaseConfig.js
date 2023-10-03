import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCkJl1gCKJD9a1wxSfUtpwYxKNFxMARDlY",
  authDomain: "chatgroup-c9c27.firebaseapp.com",
  projectId: "chatgroup-c9c27",
  storageBucket: "chatgroup-c9c27.appspot.com",
  messagingSenderId: "927029161377",
  appId: "1:927029161377:web:b51c8f89b8e8cf6698efe0",
  measurementId: "G-TVBWZ0DL7E"
};
  

export const app = initializeApp(firebaseConfig);
export const databaseApp = getFirestore(app);

