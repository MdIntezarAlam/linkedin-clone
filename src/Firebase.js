import firebase from "firebase/app";
import "firebase/firestore";
import { auth } from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAPfY6R2oNkfNPfyK-wUt4f5up_9qnzfLk",
  authDomain: "linkedin-clone-e2ab6.firebaseapp.com",
  projectId: "linkedin-clone-e2ab6",
  storageBucket: "linkedin-clone-e2ab6.appspot.com",
  messagingSenderId: "685904171955",
  appId: "1:685904171955:web:22552390dad42ecbd431c6",
};

// Initialize Firebase it connect everythings to the firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
//get the firebase database  use this line of code bellow
const db = firebaseApp.firestore();
// this is for  firebase authentication use this line of code bellow
const getAuth = firebase.auth();
export { db, getAuth };
