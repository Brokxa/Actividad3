// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCt6Q3rwo_cSGFfSK9VPdjVKi3c1Inp4fs",
  authDomain: "directorio-restaurantes-5d5cd.firebaseapp.com",
  projectId: "directorio-restaurantes-5d5cd",
  storageBucket: "directorio-restaurantes-5d5cd.firebasestorage.app",
  messagingSenderId: "607198137921",
  appId: "1:607198137921:web:181553f49136d6adf000c0"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Exporta Firestore
export const db = getFirestore(app);