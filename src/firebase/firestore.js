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
// console.log('lendo posts');
  const q = query(collection(db, 'posts')); // posts é a coleção de dados no firebase

  // onSnapshot atualiza em tempo real
  const posts = [];
  onSnapshot(q, (querySnapshot) => {
    querySnapshot.forEach((doc) => { // pega cada um dos documentos que está em nárnia
      const obj = {
        dataDoPost: doc.data().data,
        textoDoPost: doc.data().text,
        id: document.id,
      };
      posts.push(obj);
      // posts.push(doc.data().text); // doc é o código de cada e data é o conteúdo
    });
    // console.log('Posts', posts.join(''));
    console.log('Posts', posts);
    // são os posts que vieram de narnia e foram jogados numa array que está dentro da const linha 9
  exibirPosts(posts); // essa função esibe o post na tela, criar no feedjs
}

// exibir posts
// export async function createPost() {
//   const docRef = await addDoc(collection(db, 'posts'), {
//     data: ' ',
//     text: ' ',
//   });
//   console.log('Nova Postagem', docRef.id); // 
// }

// adicionar e gerenciar dados


// editPost


// likePost (Aline)
// deletePost (Alycia)
