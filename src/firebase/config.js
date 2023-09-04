import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
// https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js

import { getAuth } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
// https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js

const firebaseApp = {
  apiKey: "AIzaSyA41Dab9eY4PHp_wsvUVa9e8nYCsfLSUl8",
  authDomain: "mypet-network.firebaseapp.com",
  projectId: "mypet-network",
  storageBucket: "mypet-network.appspot.com",
  messagingSenderId: "15817347931",
  appId: "1:15817347931:web:647f11598bc19b133a407e",
  measurementId: "G-M7X1CYLD8K",
};

// Initialize Firebase
const app = initializeApp(firebaseApp);
const auth = getAuth(app);
