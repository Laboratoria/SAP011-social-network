import
{
  collection,
  query,
  onSnapshot,
  addDoc,
} from 'firebase/firestore'; // collection são o conjunto de post lá em narnia
import { db } from './config.js';

// import { collection, addDoc } from 'firebase/firestore';
// function sendPost

export function lerPosts(exibirPosts) {	
  const q = query(collection(db, "posts"));	


  const unsubscribe = onSnapshot(q, (querySnapshot) => {	
    const posts = [];	
    querySnapshot.forEach((doc) => {	
      posts.push(doc.data().text);	
    });	
    console.log("Posts", posts.join(", "));	
    exibirPosts(posts);	
    // ao inves de console uma funçao que exibe os posts em tela	
  })	
};

// createPost
export async function createPost(textPost) {
  addDoc(collection(db, 'posts'), {
    data: new Date(),
    text: textPost,
  });
  console.log('Nova Postagem', docRef.id);
}

// deletePost

// Add a new document with a generated id.
