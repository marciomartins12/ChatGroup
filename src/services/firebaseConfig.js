 import { initializeApp } from "firebase/app";
 import { getFirestore } from "firebase/firestore";



  


// terminei...
// Import the functions you need from the SDKs you need



// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyB04nk5RiLr6efLakzzGLg1bTkB3QKJ4_4",

  authDomain: "chat-3194a.firebaseapp.com",

  projectId: "chat-3194a",

  storageBucket: "chat-3194a.appspot.com",

  messagingSenderId: "80078063764",

  appId: "1:80078063764:web:5c6a70cca2087b54d58c81",

  measurementId: "G-GPT60T8YWG"

};

export const app = initializeApp(firebaseConfig);
export const databaseApp = getFirestore(app);



