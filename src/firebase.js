/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD1N8gpdGnaK70L2nkdksSr7DDggoDDHwY",
    authDomain: "e-wallet-app-48559.firebaseapp.com",
    projectId: "e-wallet-app-48559",
    storageBucket: "e-wallet-app-48559.appspot.com",
    messagingSenderId: "75417697719",
    appId: "1:75417697719:web:1713c6e6d4403a58c7bc32",
    measurementId: "G-WN3607C8SF"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  const db = firebase.firestore();
  
  const auth = firebase.auth();