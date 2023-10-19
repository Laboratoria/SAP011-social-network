import { collection, query, onSnapshot } from "firebase/firestore";	// criar uma função para cada postagem com parâmetro (ler) retorna o html
import { db } from "./config.js";	
// import { collection, addDoc } from 'firebase/firestore';
// function sendPost


export function lerPosts(exibirPosts) {	
  const q = query(collection(db, "posts"));	


  const unsubscribe = onSnapshot(q, (querySnapshot) => {	
    const posts = [];	
    querySnapshot.forEach((doc) => {	
      posts.push(doc.data().text);	
    });	
    console.log("Posts", posts.join,(", "));	
    exibirPosts(posts);	
    // ao inves de console uma funçao que exibe os posts em tela	
  })	
};

// createPost
// export async function createPost() {
//   const docRef = await addDoc(collection(db, 'cities'), {
//     name: 'Tokyo',
//     country: 'Japan',
//   });
//   console.log('Document written with ID: ', docRef.id);
// }
// deletePost

// Add a new document with a generated id.
