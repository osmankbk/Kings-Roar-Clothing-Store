import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCZmHTtMRKlXowXelM-ju3ouTOYIPUsjgQ",
  authDomain: "king-s-roar-db.firebaseapp.com",
  projectId: "king-s-roar-db",
  storageBucket: "king-s-roar-db.appspot.com",
  messagingSenderId: "598589398182",
  appId: "1:598589398182:web:b5fd1a3370276f645c6867",
  measurementId: "G-DLNGE7KJFS"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, googleProvider);
export const signInwithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

export const db = getFirestore();

export const createUserDocumentFromAuth = async (authUser, additionalInformation = {}) => {
  if(!authUser) return;

  const userDocRef = doc(db, 'users', authUser.uid);
  console.log(userDocRef);

  const docSnapShot = await getDoc(userDocRef);

  if(!docSnapShot.exists()) {
    const { displayName, email } = authUser;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      })
    } catch(error) {
      console.log('error creating the user', error.message);
    }
  }
  return userDocRef;
};

export const creathAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
}

export const signUserOut = async () => await signOut(auth);

export const onAuthStateChangeListener = (callback) => {
  if(!callback) return;
  onAuthStateChanged(auth, callback);
}
