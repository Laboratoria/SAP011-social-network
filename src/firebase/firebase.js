// funções de autenticação e armazenamento (storage) do firebase
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  // signInWithPopup,
  // GoogleAuthProvider,
  // onAuthStateChanged, avisa o status do usuário (online ou não)

} from 'firebase/auth';

import { app } from './config.js';

// função autenticação

// função para cadastrar usuário
export function registerEmail(email, password) {
  const auth = getAuth(app);
  return createUserWithEmailAndPassword(auth, email, password);
}

// função login
export function login(email, password) {
  const auth = getAuth(app);
  return signInWithEmailAndPassword(auth, email, password);
}

// função logOut
export function exit() {
  const auth = getAuth(app);
  auth.signOut() // certificar-se de como a função é chamada
    .then(() => {
      // saída com sucesso
    })
    .catch((error) => {
      alert('Erro ao sair', error); // não deixar o catch vazio, captar o erro e expor no console
    });
  window.location.hash = '#home';
}
