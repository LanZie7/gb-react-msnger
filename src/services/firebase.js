import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  getAuth,
} from "firebase/auth";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8vVIoAoBHCid8sYjycuuWsR-JcgXFdtM",
  authDomain: "gb-react-msnger.firebaseapp.com",
  databaseURL: "https://gb-react-msnger-default-rtdb.firebaseio.com",
  projectId: "gb-react-msnger",
  storageBucket: "gb-react-msnger.appspot.com",
  messagingSenderId: "260443459073",
  appId: "1:260443459073:web:80664fd6bd72d35128ba00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const signUp = async (email, pass) => {
  await createUserWithEmailAndPassword(auth, email, pass);
};

export const logIn = async (email, pass) => {
  await signInWithEmailAndPassword(auth, email, pass);
};

export const logOut = async () => {
  await signOut(auth);
};