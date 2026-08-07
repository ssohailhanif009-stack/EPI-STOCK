<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyChMj0SRQlA0MrsDGJHr8BNbxSKXuFAYPo",
    authDomain: "epi-stock-39e88.firebaseapp.com",
    projectId: "epi-stock-39e88",
    storageBucket: "epi-stock-39e88.firebasestorage.app",
    messagingSenderId: "893702330698",
    appId: "1:893702330698:web:8f2adf7b9d541bb9d909b3",
    measurementId: "G-ECDS1BK0Y6"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
