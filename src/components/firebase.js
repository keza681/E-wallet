/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-Z87wFwizDrWIQFVhWcWoUteR6SJJNj0",
  authDomain: "ewallet-5c9cc.firebaseapp.com",
  projectId: "ewallet-5c9cc",
  storageBucket: "ewallet-5c9cc.appspot.com",
  messagingSenderId: "263915026370",
  appId: "1:263915026370:web:70bdc70c980c4c41e3485b"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const auth = firebase.auth();