import {
  collection,
  query,
  onSnapshot,
  orderBy,
  addDoc,
  doc,
  updateDoc,
} from 'firebase/firestore';
// collection são o conjunto de post lá em narnia
import { db } from './config.js';

// exibPost
export function lerPosts(exibirPosts) {
// console.log('lendo posts');
  const q = query(collection(db, 'posts'), orderBy('data', 'asc')); // ordenar exibição de posts

  // onSnapshot atualiza em tempo real
  onSnapshot(q, (querySnapshot) => {
    const posts = [];
    querySnapshot.forEach((document) => { // pega cada um dos documentos que está em nárnia
      const obj = {
        dataDoPost: document.data().data,
        textoDoPost: document.data().text,
        idUser: document.id, // sequência de números e letras lá na collection que identifica o post
      };
      posts.push(obj);
    });
    // console.log('Posts', posts.join(''));
    console.log('esta somando?', posts);
    // são os posts que vieram de narnia e foram jogados numa array que está dentro da const linha 9
    exibirPosts(posts); // essa função exibe o post na tela, criar no feedjs
  });
}

export async function createPost(textPost) {
  console.log(textPost);
  await addDoc(collection(db, 'posts'), {
    data: new Date(), // pega a data atual
    text: textPost,
  });
}
// editPost
// export async function editPost(userId, newText, dataPost) {
//   await updateDoc(doc(db, 'posts', userId), {
//     dataDoPost: dataPost,
//     textoDoPost: newText,
//     idUser: userId,
//   });
// }

// createPost


// deletePost

// Add a new document with a generated id.
