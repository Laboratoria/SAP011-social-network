import {
  collection,
  query,
  onSnapshot,
  orderBy,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';
// collection são o conjunto de post lá em narnia
import { db } from './config.js';

// exibPost
export function lerPosts(exibirPosts) {
  const q = query(collection(db, 'posts'), orderBy('data', 'asc')); // ordenar exibição de posts

  // onSnapshot atualiza em tempo real
  onSnapshot(q, (querySnapshot) => {
    const posts = [];
    querySnapshot.forEach((document) => { // pega cada um dos documentos que está em nárnia
      const userObj = {
        dataDoPost: document.data().data,
        textoDoPost: document.data().text,
        likeDoPost: document.data().like,
        uid: document.data().uid,
        idPost: document.id, // sequência de números e letras lá na collection que identifica o post
      };
      posts.push(userObj);
    });
    // são os posts que vieram de narnia e foram jogados numa array que está dentro da const linha 9
    exibirPosts(posts); // essa função exibe o post na tela, criar no feedjs
  });
}

// createPost
export async function createPost(textPost, uidName) {
  await addDoc(collection(db, 'posts'), {
    data: new Date(), // pega a data atual
    text: textPost,
    uid: uidName,
    like: 0,

  });
}

// likePost
export function likePost(postId, quantidadeLikes) {
  updateDoc(doc(db, 'posts', postId), {
    like: quantidadeLikes,
  });
}

// editPost
export async function editPost(idPost, newText) {
  console.log(idPost, newText);
  await updateDoc(doc(db, 'posts', idPost), {
    text: newText,
  });
}

// deletePosts
export async function deletePost(idPost) {
  await deleteDoc(doc(db, 'posts', idPost));
}


