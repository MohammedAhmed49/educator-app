import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBwjSSIGH7FWRpw6q-2PLLpX2nm7dfWMuM",
    authDomain: "educator-f27a2.firebaseapp.com",
    projectId: "educator-f27a2",
    storageBucket: "educator-f27a2.appspot.com",
    messagingSenderId: "220554376675",
    appId: "1:220554376675:web:d899fe3ff22a8330a19cd6"
  };
  

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

export const auth = getAuth();

export const signInWithGoogle = () => signInWithPopup(auth, provider);

