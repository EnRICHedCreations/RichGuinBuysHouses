// Firebase Configuration for RichGuin Buys Houses
const firebaseConfig = {
  apiKey: "AIzaSyBfbnWo8A4eHpcXl2xQ3qHNaRLfOJxc094",
  authDomain: "richguinbuyshouses.firebaseapp.com",
  projectId: "richguinbuyshouses",
  storageBucket: "richguinbuyshouses.firebasestorage.app",
  messagingSenderId: "217042415235",
  appId: "1:217042415235:web:00d2ae38998765032e75b6",
  measurementId: "G-VBMY5FFL07"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const db = firebase.firestore();
