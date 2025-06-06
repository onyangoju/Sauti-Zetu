// src/firebaseClient.ts
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB32cemHHJqq2dHKQGKuQlollu7atifXOo",
  authDomain: "sauti-zetu.firebaseapp.com",
  databaseURL: "https://sauti-zetu-default-rtdb.firebaseio.com",
  projectId: "sauti-zetu",
  storageBucket: "sauti-zetu.appspot.com",
  messagingSenderId: "1006205617279",
  appId: "1:1006205617279:web:9b583fd81e9a0ecbba6b4a",
  measurementId: "G-HQ1KL9J096"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
