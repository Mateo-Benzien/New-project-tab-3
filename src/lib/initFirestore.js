// src/pages/initFirestore.jsx
import { useEffect } from 'react';
import { initializeProducts } from '../lib/initFirestore';

const InitFirestorePage = () => {
  useEffect(() => {
    const initFirestore = async () => {
      await initializeProducts();
      console.log('Default products initialized');
    };

    initFirestore();
  }, []);

  return <div>Initializing Firestore...</div>;
};

export default InitFirestorePage;
