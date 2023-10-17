import { collection, query, onSnapshot } from 'firebase/firestore';
import { db } from './config.js';

export function lerPosts(exibirPosts) {
console.log('lendo posts');
  const q = query(collection(db, 'posts'));

  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const posts = [];
    querySnapshot.forEach((doc) => {
      posts.push(doc.data().text);
    });
    console.log('Posts', posts.join('', ''));
    exibirPosts(posts);
    // ao inves de console uma funçao que exibe os posts em tela
  });
}

// // criar uma função para cada postagem com parâmetro (ler) retorna o html
// import { collection, addDoc } from 'firebase/firestore';
// // function sendPost

// // createPost
// export async function createPost() {
//   const docRef = await addDoc(collection(db, 'cities'), {
//     name: 'Tokyo',
//     country: 'Japan',
//   });
//   console.log('Document written with ID: ', docRef.id);
// }
// deletePost

// Add a new document with a generated id.
