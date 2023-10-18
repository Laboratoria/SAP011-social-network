import { db } from './firebaseConfig';
import { collection, query, onSnapshot } from "firebase/firestore";

export function readPosts() {
    const q = query(collection(db, "posts"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const posts = []
        querySnapshot.forEach((doc) =>{
            const obj ={
                textOfPost: doc.data().text,
                dateOfPost: doc.data().date
            }
            posts.push(doc.data());
        });
        console.log("Posts: ", posts.join(", "));
    });
};
