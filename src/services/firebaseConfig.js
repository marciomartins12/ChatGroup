 import { initializeApp } from "firebase/app";
 import { getFirestore } from "firebase/firestore";


 const firebaseConfig = {

  apiKey: "AIzaSyBbn_wz8Qf-tjjG_Os_7eRGJZNgHq-WOmY",

  authDomain: "chatestemaisumavez.firebaseapp.com",

  projectId: "chatestemaisumavez",

  storageBucket: "chatestemaisumavez.appspot.com",

  messagingSenderId: "187402863824",

  appId: "1:187402863824:web:682f43845eae2b46f7cad5",

  measurementId: "G-6TY8M80TH3"

};

  

 export const app = initializeApp(firebaseConfig);
 export const databaseApp = getFirestore(app);

// terminei...