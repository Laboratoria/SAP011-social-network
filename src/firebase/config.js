import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

export const firebaseConfig = {
  apiKey: "AIzaSyA41Dab9eY4PHp_wsvUVa9e8nYCsfLSUl8",
  authDomain: "mypet-network.firebaseapp.com",
  projectId: "mypet-network",
  storageBucket: "mypet-network.appspot.com",
  messagingSenderId: "15817347931",
  appId: "1:15817347931:web:647f11598bc19b133a407e",
  measurementId: "G-M7X1CYLD8K",
  databaseURL: "https://mypet-network-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
