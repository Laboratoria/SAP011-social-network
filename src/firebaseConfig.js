// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBU9V4Nhgx-8ZiLOAX9kZ2jowhSXI037PM",
  authDomain: "sap011-redes-sociais.firebaseapp.com",
  projectId: "sap011-redes-sociais",
  storageBucket: "sap011-redes-sociais.appspot.com",
  messagingSenderId: "252066332059",
  appId: "1:252066332059:web:3f8d611e90ef0f0688353e",
  measurementId: "G-4QHRRVYFKP",
};

// Responsável por inicializar o firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const createUser = async (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

export const db = getFirestore(app);
export const dbUsers = collection(db, "users");
export const dbPosts = collection(db, "posts");
export const dbComments = collection(db, "comments");
export const dbLikes = collection(db, "likes");
