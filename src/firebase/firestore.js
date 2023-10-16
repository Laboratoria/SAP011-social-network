// criar uma função para cada postagem com parâmetro (ler) retorna o html
import { collection, addDoc } from 'firebase/firestore';
import { db } from './config.js';
// function sendPost



// createPost
export async function createPost() {
  const docRef = await addDoc(collection(db, 'posts'), {
    data: 'Tokyo',
    text: 'Japan',
    uid: 'qualquer coisa',
  });
  console.log('Document written with ID: ', docRef.id);
}
// deletePost

// Add a new document with a generated id.
