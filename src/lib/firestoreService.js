// src/lib/firestoreService.js
import { db } from './firebaseConfig';
import { collection, addDoc, getDocs } from 'firebase/firestore';

// Add a product to the 'products' collection
export const addProduct = async (productData) => {
  try {
    const docRef = await addDoc(collection(db, 'products'), productData);
    console.log('Document written with ID: ', docRef.id);
    return docRef.id; // Return the document ID
  } catch (e) {
    console.error('Error adding document: ', e);
    throw e; // Propagate the error
  }
};

// Fetch all products from the 'products' collection
export const fetchProducts = async () => {
  const querySnapshot = await getDocs(collection(db, 'products'));
  const products = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return products;
};
