// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDmtNqNbdaiU2KPtvVekGawGOhBrieubTA",
  authDomain: "clone-37135.firebaseapp.com",
  projectId: "clone-37135",
  storageBucket: "clone-37135.appspot.com",
  messagingSenderId: "981490012442",
  appId: "1:981490012442:web:de4bfcd708a276f4f41ca3",
  measurementId: "G-N6424FCQ98",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
