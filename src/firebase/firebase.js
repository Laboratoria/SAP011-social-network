// funções de autenticação e armazenamento (storage) do firebase

import {
  // entrar com google
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,

} from 'firebase/auth';

// função login

export function login(email, password) {
  const auth = getAuth();
  return signInWithEmailAndPassword(auth, email, password);
}

// função para cadastrar usuário
export function registerEmail(email, password) {
  const auth = getAuth();
  return createUserWithEmailAndPassword(auth, email, password);
}

// const auth = getAuth();
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });
