<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDkGYva8XEryBevjHBJm3VSDRwjnOrb3kc",
    authDomain: "epi-stock-c7945.firebaseapp.com",
    projectId: "epi-stock-c7945",
    storageBucket: "epi-stock-c7945.firebasestorage.app",
    messagingSenderId: "966405212084",
    appId: "1:966405212084:web:b523f41e8c011e409054e1",
    measurementId: "G-L4QNDF2Z31"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
