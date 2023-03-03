import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyAAmcPCCblj0Iasc4Ue2F9kDH9hbl6_5_A',
  authDomain: 'test-shop-42c74.firebaseapp.com',
  projectId: 'test-shop-42c74',
  storageBucket: 'test-shop-42c74.appspot.com',
  messagingSenderId: '376604269419',
  appId: '1:376604269419:web:e9af37508952d050cc0a2e',
  measurementId: 'G-Q5KXSNWN9C',
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const firestore = firebase.firestore();

export { auth, firestore };
