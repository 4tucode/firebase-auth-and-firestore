import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDhSIepj_vzRjDeF2g__vhfUMKMBcqrJv8",
  authDomain: "fir-auth-de3fe.firebaseapp.com",
  projectId: "fir-auth-de3fe",
  storageBucket: "fir-auth-de3fe.firebasestorage.app",
  messagingSenderId: "382079211445",
  appId: "1:382079211445:web:14139907d50ffced6eebfc"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app) 
const db = getFirestore(app)
export { auth, db }