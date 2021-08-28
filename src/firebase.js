import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyAGa6rk3NYzHbzMmNkQrDeykGrXPquLMps",
  authDomain: "tinder-clone-698bc.firebaseapp.com",
  projectId: "tinder-clone-698bc",
  storageBucket: "tinder-clone-698bc.appspot.com",
  messagingSenderId: "541751583374",
  appId: "1:541751583374:web:a3f3c3e9c484b5884c9fdf",
  measurementId: "G-2E6D6BSHV3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;
