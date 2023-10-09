import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {app} from "./firebase.js"

export function verifyRegister(email, password){
const auth = getAuth(app);
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    
    const user = userCredential.user;
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    
  });

}
