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

const database = getDatabase(app);
