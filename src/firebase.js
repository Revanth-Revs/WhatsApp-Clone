import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBa0RcLeal6h4HwUjNmJ-z12R4iAC3iI10",
  authDomain: "whatsapp-clone-revs.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-revs.firebaseio.com",
  projectId: "whatsapp-clone-revs",
  storageBucket: "whatsapp-clone-revs.appspot.com",
  messagingSenderId: "933040931971",
  appId: "1:933040931971:web:1ea782fe06a214e7e387b6",
  measurementId: "G-NQJW6ZSD0Y",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
