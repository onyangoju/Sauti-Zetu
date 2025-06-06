
// src/firebaseClient.ts
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC-7vaLFk4M3q6aE_3UZRLsVKyWfHC--FQ",
  authDomain: "sauti-zetu-edc54.firebaseapp.com",
  databaseURL: "https://sauti-zetu-edc54-default-rtdb.firebaseio.com", 
  projectId: "sauti-zetu-edc54",
  storageBucket: "sauti-zetu-edc54.firebasestorage.app",
  messagingSenderId: "334240604370",
  appId: "1:334240604370:web:8a8e644c073f697caa0d0b",
  measurementId: "G-J5QC66SKBD"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
