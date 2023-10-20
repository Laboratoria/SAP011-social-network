import
{
  collection,
  query,
  onSnapshot,
  addDoc,
  updateDoc,
} from 'firebase/firestore'; // collection são o conjunto de post lá em narnia
import { db } from './config.js';

// exibPost
export function lerPosts(exibirPosts) {
console.log('lendo posts');
  const q = query(collection(db, 'posts'));

  // onSnapshot atualiza em tempo real
  const posts = [];
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    querySnapshot.forEach((doc) => { // pega cada um dos documentos que está em nárnia
      posts.push(doc.data().text);
    });
    console.log('Posts', posts.join(''));
    // console.log('Posts', posts);
    // são os posts que vieram de narnia e foram jogados numa array que está dentro da const linha 9
    // exibirPosts(posts);  nao é p firestore que deve exibir o post e sim o feed
    // ao inves de console uma funçao que exibe os posts em tela
  });
  return posts; // exportar para o feed a função de ler posts
}

// createPost
export async function createPost() {
  const docRef = await addDoc(collection(db, 'posts'), {
    data: ' ',
    text: ' ',
  });
  console.log('Nova Postagem', docRef.id);
}

// deletePost

// Add a new document with a generated id.
