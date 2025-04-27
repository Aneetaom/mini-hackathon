
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { serverTimestamp } from 'https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js';

import { getAuth,
   onAuthStateChanged,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   signOut,
   sendEmailVerification,
   sendPasswordResetEmail,
   updatePassword,
   GoogleAuthProvider,
   signInWithPopup,
 } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

// firestore

import { 
  getFirestore,
  doc, setDoc, getDoc, addDoc, collection, getDocs, deleteDoc, updateDoc, onSnapshot, query, orderBy, where
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";



const firebaseConfig = {
  apiKey: "AIzaSyD2j4HEnEx32rBMkGRcPtYS7ysrZGlHU7o",
    authDomain: "irebase-2d25c.firebaseapp.com",
    projectId: "irebase-2d25c",
    storageBucket: "irebase-2d25c.firebasestorage.app",
    messagingSenderId: "950163637880",
    appId: "1:950163637880:web:b89a9d4500360691f7cf8d"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

  const auth = getAuth(app);

  const provider = new GoogleAuthProvider();

  const db = getFirestore(app);

  export { auth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendEmailVerification,
     signOut,
     sendPasswordResetEmail,
     updatePassword,
     GoogleAuthProvider,
     signInWithPopup,

     //firestore

    //  doc, setDoc,  db,
    //  getDoc

   
      db, doc, setDoc, getDoc, addDoc, collection, getDocs, deleteDoc, updateDoc, onSnapshot, query, orderBy, where, serverTimestamp
   
  



  };