import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';


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

const db = getFirestore();

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth();

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);


export const getUserDocument = async (userAuth, additionalData) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userDocSnap = await getDoc(userDocRef);

  if (!userDocSnap.exists()) {
    const { email, displayName } = userAuth;
    const creationDate = new Date();

    try {
      const result = await setDoc(userDocRef, {
        email,
        displayName,
        creationDate,
        ...additionalData
      });

      return result;
    } catch (error) {
      alert(error.message);
    }
  }
}

export const signOutCustom = async () => await signOut(auth);

export const signInWithGoogle = () => signInWithPopup(auth, provider);

export const signUpWithEmail = async (email, password, displayName) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    
    await updateProfile(auth.currentUser, {
      displayName: displayName
    });
    return user;
  } catch (error) {
    alert(error.message);
  }
}

