import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyANCtZHX7QEyvB5phftbl2X4m5P5wzpu-Y",
    authDomain: "react-blog-7e701.firebaseapp.com",
    projectId: "react-blog-7e701",
    storageBucket: "react-blog-7e701.appspot.com",
    messagingSenderId: "49133740148",
    appId: "1:49133740148:web:90e5114a8fb2cd85ec3121"
  };

  initializeApp(firebaseConfig);

  const db = getFirestore();
  const auth = getAuth();
  export {db,auth}