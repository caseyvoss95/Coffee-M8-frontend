import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBGni7lmeM3w-7Gs1GzXpETBGbDVwtRzcY",
    authDomain: "coffee-m8.firebaseapp.com",
    projectId: "coffee-m8",
    storageBucket: "coffee-m8.appspot.com",
    messagingSenderId: "24285196422",
    appId: "1:24285196422:web:2d7c07c9105518a23b6107",
    measurementId: "G-7TXERVPW44"
  };
  
  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);
  console.log('auth is', auth)

  export const database = getFirestore(app);
