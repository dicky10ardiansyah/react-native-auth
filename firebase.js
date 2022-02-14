// Import the functions you need from the SDKs you need
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBtpmIdx923i8UBaVsqd0pgVtUzWr-ZNhQ",
  authDomain: "simplecrud-22283.firebaseapp.com",
  databaseURL: "https://simplecrud-22283-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "simplecrud-22283",
  storageBucket: "simplecrud-22283.appspot.com",
  messagingSenderId: "615907165911",
  appId: "1:615907165911:web:702dc374370e8b7c6ad292"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const auth = firebase.auth();

export { auth };