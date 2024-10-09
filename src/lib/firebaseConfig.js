// src/lib/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; // Import Firestore

const firebaseConfig = {
  apiKey: "AIzaSyAaail61cQ2zq_0zatiIlAHMq7HJ076lTo",
  authDomain: "next-ecommerce-6e032.firebaseapp.com",
  projectId: "next-ecommerce-6e032",
  storageBucket: "next-ecommerce-6e032.appspot.com",
  messagingSenderId: "681137016874",
  appId: "1:681137016874:web:d2b0322646dc2496e27353"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); // Initialize Firestore and export it