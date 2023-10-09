// funções de autenticação e armazenamento (storage) do firebase

import {
  // entrgar com google
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged, // avisa o status do usuário (online ou não)

} from 'firebase/auth';

import { app } from './config.js';

// função para cadastrar usuário
export function registerEmail(email, password) {
  const auth = getAuth();
  return createUserWithEmailAndPassword(auth, email, password);
}

// função login
export function login(email, password) {
  const auth = getAuth();
  return signInWithEmailAndPassword(auth, email, password);
}
