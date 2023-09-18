import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { app } from "./config.js";

// Initialize Firebase
const auth = () => getAuth(app);
// const user = auth.currentUser;

async function createUser(email, password) {
  await createUserWithEmailAndPassword(auth(), email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  // location.hash = "#welcome";
}

export const checkLogin = () => {
  onAuthStateChanged(auth(), (user) => {
    if (user) {
      // window.location.href = "#timeline";
      // return user.email;
      console.log("usuário logado");
    } else {
      window.location.href = "#login";
    }
  });
};

export const getUserInfo = () => {
  return auth.currentUser;
};

async function signIn(email, password) {
  await signInWithEmailAndPassword(auth(), email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  //location.hash = "#timeline";
}

const provider = new GoogleAuthProvider();

async function signGoogle() {
  await signInWithPopup(auth(), provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      // const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  // location.hash = "#timeline";
}

async function resetLink(email) {
  await sendPasswordResetEmail(auth(), email)
    .then(() => {
      // Password reset email sent!
      // ..
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  //location.hash = "#login";
}

async function exit() {
  await signOut(auth())
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
  location.hash = "#login";
}

export { createUser, signIn, signGoogle, resetLink, exit };
