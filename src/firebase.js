
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYq3tWXIG7C5LqT2ADNW_1_JI9mjqRh5M",
  authDomain: "linkedin-clone-24702.firebaseapp.com",
  projectId: "linkedin-clone-24702",
  storageBucket: "linkedin-clone-24702.appspot.com",
  messagingSenderId: "706606082851",
  appId: "1:706606082851:web:82cd6a3dce2dcf6d7aba96"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth, provider, storage};
export default db;