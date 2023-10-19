// import { createPost } from "../../firebase/firestore";
// import { signOut } from 'firebase/auth';
import { lerPosts } from '../../firebase/firestore.js';
import { exit } from '../../firebase/firebase.js';

export default () => {
  const container = document.createElement('div');

  const template = `
<header> 
<p>
<button id="about-btn" type="submit">Sobre</button> 
<button id="exit-btn" type="submit">Sair</button> 
</header>

<label>Nome</label>
<p>
<textarea id="new-post-txt" placeholder="Digite seu post aqui..." minlength="20"
maxlength="200" rows=5 cols=20>
</textarea>
<p>
<button id="post-btn" type="submit">Postar</button><img width="16" height="16" src="https://img.icons8.com/ios/50/hearts--v1.png" alt="hearts--v1"/>
<section id ='posts'></section>


      `;

  container.innerHTML = template;
  // escrever as postagens que o usuário escreve na tela
  container.querySelector('#post-btn').addEventListener('click', () => {
    const newPost = container.querySelector('#new-post-txt').value;
    // createPost()
    console.log(newPost);
  });

  lerPosts(exibirPost);

 function exibirPost (posts){
 const postsExibir = container.querySelector('#posts');
 const containerPosts = `
 <label for="containerPosts"></label>
 <textarea id="containerPosts" minlength="20" maxlength="200" rows=5 cols=20>${posts}</textarea>
 `;
    postsExibir.innerHTML = containerPosts;
  }

  return container;
};


// botão sair
const exitBtn = document.querySelector('#exit-btn');
exitBtn.addEventListener('click', exit);


// armazenar no firebase
// adição(addDoc), leitura (getDoc), atualizar (UpdateDoc), deletar (deletDoc) metódos do firestore
// adição precisa de um id, firebase cria com getDoc

// printar o post em tela
// firebase lê o banco de dados e armazena na array, depois printa