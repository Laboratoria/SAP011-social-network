import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
import { getDatabase } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyA41Dab9eY4PHp_wsvUVa9e8nYCsfLSUl8",
  authDomain: "mypet-network.firebaseapp.com",
  projectId: "mypet-network",
  storageBucket: "mypet-network.appspot.com",
  messagingSenderId: "15817347931",
  appId: "1:15817347931:web:647f11598bc19b133a407e",
  measurementId: "G-M7X1CYLD8K",
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://mypet-network-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase
const auth = getAuth(app);
// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

// PARA RECEBER INFORMAÇÕES DO USUÁRIO
const user = auth.currentUser;

if (user !== null) {
  // The user object has basic properties such as display name, email, etc.
  const displayName = user.displayName;
  const email = user.email;
  const photoURL = user.photoURL;
  const emailVerified = user.emailVerified;

  // The user's ID, unique to the Firebase project. Do NOT use
  // this value to authenticate with your backend server, if
  // you have one. Use User.getToken() instead.
  const uid = user.uid;
}
