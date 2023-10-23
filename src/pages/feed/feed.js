import { createPost } from "../../firebase/firestore";
import { lerPosts } from '../../firebase/firestore.js';

export default () => {
  const container = document.createElement('div');

  const template = `
<<<<<<< HEAD
<head> 
<link href="https://fonts.googleapis.com/css2?family=Material+Icons&display=swap" rel="stylesheet">
<p>
<i class="material-icons custom-icon">
<a href="/#home">home</a></i> <!-- Ícone da página cadastrar-->
<i class="material-icons custom-icon">
<a href="/#about">favorite</a></i> <!-- Ícone para ir ao about-->
<i class="material-icons custom-icon" onclick="irParaExit()">exit_to_app</i> <!-- Ícone para ir ao login -->
</head>
<p>
=======
<header> 
>>>>>>> 918ae45dbaa92791cd0893a78616988e398182e8
<button type="submit">Sobre</button> <button type="submit">Sair</button> 
<p>
<head>
<p>
<label>Nome</label>
<section id="posts">
<textarea id="new-post-txt" placeholder="Digite seu post aqui..." minlength="20"
maxlength="200" rows=5 cols=20>
</textarea>
<p>
<button id="post-btn" type="submit">Postar</button>/
<p>
<i class="material-icons custom-icon like" id="like">
<a href="/#feed">favorite</a></i> <!-- Ícone de like do post -->
<p>
<section id ='posts'></section>
      `;

  container.innerHTML = template;
<<<<<<< HEAD
=======
  // escrever as postagens que o usuário escreve na tela
>>>>>>> 918ae45dbaa92791cd0893a78616988e398182e8
  container.querySelector('#post-btn').addEventListener('click', () => {
    const newPost = container.querySelector('#new-post-txt').value;
    console.log(newPost);
  });
<<<<<<< HEAD
  
 lerPosts(exibirPost);

 function exibirPost (posts){
 const postsExibir = container.querySelector('#posts');
 const containerPosts = `
 <label for="container-posts"></label>
 <textarea id="container-posts" minlength="20" maxlength="200" rows=5 cols=20 readonly>${posts}</textarea>
 `;
 postsExibir.innerHTML = containerPosts;
 };

return container;

};
  // const enterBtn = container.querySelector('#enter-btn');
  // enterBtn.addEventListener('click', (event) => {
  //   console.log('entrei');
  //   event.preventDefault();
  //   const email = container.querySelector('#email-login').value;
  //   const password = container.querySelector('#password-login').value;
  //   login(email, password)
  //     .then(() => {
  //       // Será executado se der certo
  //       window.location.hash = '#feed';
  //     })
  //     .catch((error) => {
  //       // Será executado se der erro
  //       console.log(error);
  //       alert('erro');
  //     });
  // });
=======

  lerPosts(exibirPost);

  function exibirPost(posts) {
    const postsExibir = container.querySelector('#posts');
    posts.forEach((post) => {
      const containerPosts = `
   <label for="containerPosts"></label>
   <textarea id="containerPosts" minlength="20" maxlength="200" rows=5 cols=20>${post}</textarea>
   `;
      postsExibir.innerHTML += containerPosts;
    });
  }

  return container;
};
>>>>>>> 918ae45dbaa92791cd0893a78616988e398182e8

// armazenar no firebase
// adição(addDoc), leitura (getDoc), atualizar (UpdateDoc), deletar (deletDoc) metódos do firestore
// adição precisa de um id, firebase cria com getDoc


// firebase lê o banco de dados e armazena na array, depois printa em tela