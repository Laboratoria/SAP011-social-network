// criar uma função para cada postagem com parâmetro (ler) retorna o html
// function sendPost
// criatePost

// deletePost

import { collection, addDoc } from "firebase/firestore"; 
export async function createPost () {
const docRef = await addDoc(collection(db, "cities"), {
  name: "Tokyo",
  country: "Japan"
});
console.log("Document written with ID: ", docRef.id);

}
// Add a new document with a generated id.
