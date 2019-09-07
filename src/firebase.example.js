import firebase from "firebase/app";
import "firebase/firestore";

// get the details from firebase and create firebase.js

const firebaseConfig = firebase.initializeApp({
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
});

export { firebaseConfig as firebase };
