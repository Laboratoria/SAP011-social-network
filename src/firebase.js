import {app} from './firebaseConfig.js';
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";

const auth = getAuth(app);

export function login () {
    signInWithEmailAndPassword(auth, "abf.ferreirac@gmail.com", "123456789")
  .then((userCredential) => {
    // Signed in 
    console.log("deu certo!")
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("deu errado!", error.code, error.message)
  });
}

