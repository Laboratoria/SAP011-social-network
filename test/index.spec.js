import {
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
 } from "firebase/auth";

import { 
  signIn,
  signGoogle,
  createUser,
  resetLink,
  exit,
  } from "../src/firebase/auth.js";


jest.mock("firebase/auth");

describe('Criar Usuario', () => {
  it('cria uma conta do usuário utilizando o email e senha', async () => {
    const mockAuth = {
      currentUser: {},
    };
    getAuth.mockReturnValueOnce(mockAuth);
    createUserWithEmailAndPassword.mockResolvedValueOnce();
    const email = 'teste2@teste.com';
    const password = '123456';
    const displayName = 'testName';
    await createUser(email, password, displayName);

    expect(createUserWithEmailAndPassword).toHaveBeenCalledTimes(1);
    
  
  });
});

describe('signIn', () => {
  it('Logar usuário utilizando o email e senha', async () => {
    signInWithEmailAndPassword.mockResolvedValueOnce();
    const email = 'teste@teste.com';
    const password = '123456';
    await signIn(email, password);
    expect(signInWithEmailAndPassword).toHaveBeenCalledTimes(1);
    expect(signInWithEmailAndPassword).toHaveBeenCalledWith(getAuth(), email, password);
  });
});

describe('signOut', () => {
  it('Deslogar', async () => {
    await signOut();
    expect(signOut).toHaveBeenCalled();
  });
});

// nao funciona 

describe('signInGoogle', () => {
  it('Login com Google account', async () => {
     signInWithPopup.mockResolvedValueOnce();

    await signGoogle();

    expect(typeof signGoogle).toBe('function');
    expect(signInWithPopup).toHaveBeenCalledTimes(1);
    expect(signInWithPopup).toHaveBeenCalledWith(undefined, provider);
  });
});

describe('resetLink', () => {
  it('Enviar email com link de redefinição', () => {
    sendPasswordResetEmail.mockResolvedValue();
    resetLink();
    expect(sendPasswordResetEmail).toHaveBeenCalledTimes(1);
  });
});