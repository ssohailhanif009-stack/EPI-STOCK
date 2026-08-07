// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDkGYva8XEryBevjHBJm3VSDRwjnOrb3kc",
  authDomain: "epi-stock-c7945.firebaseapp.com",
  projectId: "epi-stock-c7945",
  storageBucket: "epi-stock-c7945.firebasestorage.app",
  messagingSenderId: "966405212084",
  appId: "1:966405212084:web:b523f41e8c011e409054e1",
  measurementId: "G-L4QNDF2Z31"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// In functions ko export karein taake baaki files mein use kar sakein
export { db };
