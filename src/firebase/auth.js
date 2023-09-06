import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,  
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";

import { firebaseApp } from "./config.js";

// Initialize Firebase
const app = initializeApp(firebaseApp);
const auth = getAuth(app);

function createUser(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      location.hash = "#welcome";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}

function signIn(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      location.hash = "#timeline";
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

const provider = new GoogleAuthProvider();

function signGoogle() {
   signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    location.hash = "#timeline";
    }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}

export { createUser, signIn, signGoogle };



// // meus dados 


// import { 
// getAuth,
// signInWithPopup, 
// GoogleAuthProvider 
// } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";

// const auth = getAuth();
// signInWithPopup(auth, provider)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     // The signed-in user info.
//     const user = result.user;
//     // IdP data available using getAdditionalUserInfo(result)
//     // ...
//   }).catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });


//   async function logarGoogle() {
//     await signInWithPopup(auth, provider);
//     // Verifica se o usuário que acabou de logar com o google já existe na collection de usuarios.
//     // Caso não exista cria o usuário na collection
//     const usuario = await getDoc(doc(db, 'usuarios', auth.currentUser.uid));
//     if (!usuario.exists()) {
//       const usuarioGoogle = {
//         email: auth.currentUser.email,
//         nomeTutor: auth.currentUser.displayName,
//         nomeCao: '',
//       };
  
//       await setDoc(doc(db, 'usuarios', auth.currentUser.uid), usuarioGoogle);
//       console.log('usuarioCriado');
//     }
//   }
