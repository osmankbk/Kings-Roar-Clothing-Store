import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider
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
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (authUser) => {
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
      })
    } catch(error) {
      console.log('error creating the user', error.message);
    }
  }

};