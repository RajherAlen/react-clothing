import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBu4L72BR2ch5OJ1RNkxJCEGnmd4jHL40Y",
  authDomain: "crwn-db-f5f1f.firebaseapp.com",
  databaseURL: "https://crwn-db-f5f1f.firebaseio.com",
  projectId: "crwn-db-f5f1f",
  storageBucket: "crwn-db-f5f1f.appspot.com",
  messagingSenderId: "687566241395",
  appId: "1:687566241395:web:969347105f60440b86f406",
  measurementId: "G-7W1RJHEK9S",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
