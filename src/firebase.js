import firebase from "firebase/compat/app";
import "firebase/compat/auth";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBQq2N7v-uPax4IE4FcKzGgSjSjvs3a1v8",
  authDomain: "clone-cbf28.firebaseapp.com",
  databaseURL: "https://clone-cbf28-default-rtdb.firebaseio.com",
  projectId: "clone-cbf28",
  storageBucket: "clone-cbf28.appspot.com",
  messagingSenderId: "679932523384",
  appId: "1:679932523384:web:0015f0b04bfba5b1464e8d",
  measurementId: "G-W4BEXX40BT"
  };
  firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth();