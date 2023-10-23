import { lerPosts, createPost } from '../../firebase/firestore.js';
import editbutton from '../../img/editbutton.png';
import favoritebutton from '../../img/favorite.png';
import { exit } from '../../firebase/firebase.js';

export default () => {
  const container = document.createElement('div');

  const template = `
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
<button id="about-btn" type="submit">Sobre</button> 
<button id="exit-btn" type="submit">Sair</button> 
</header>

<label>Nome</label>
<p>
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

  container.querySelector('#post-btn').addEventListener('click', () => {
    const newPost = container.querySelector('#new-post-txt').value;
    createPost(newPost)
    console.log(newPost);
  });

  function exibirPost(posts) {
    const postsExibir = container.querySelector('#posts');
    postsExibir.innerHTML = ''; // limpa a tela e começa a colocar os posts em tela
    posts.forEach((element) => {
      const containerPosts = `
      <label id="container-posts"></label>
      <textarea id="container-posts" minlength="20" maxlength="200" rows=5 cols=20 readonly>${element.textoDoPost}</textarea>
      <img id="edit-btn" alt="botão editar" src="${editbutton}"/>
      <img id="favorite-btn" alt="curtida coração" src="${favoritebutton}"/>
      `;
      postsExibir.innerHTML += containerPosts;
    });
  }
  lerPosts(exibirPost);

  // botão sair
  const exitBtn = container.querySelector('#exit-btn');
  exitBtn.addEventListener('click', exit);

  // editPost
  // const buttonEdit = container.querySelector('#edit-btn').addEventListener('click', () => {
  //     if (buttonEdit) {
  //       // botão clicado, linkar com qual caixa de texto? a externa ou a interna?
  //       // pego o texto a ser editado pelo id?
  //     } else if {
  //       // alerta de alteração com sucesso 
  //     } else {
  //       // aviso de erro ao armazenar alteração
  //     }
  //   });

  return container;
};



// armazenar no firebase
// adição(addDoc), leitura (getDoc), atualizar (UpdateDoc), deletar (deletDoc) metódos do firestore
// adição precisa de um id, firebase cria com getDoc

// printar o post em tela
// firebase lê o banco de dados e armazena na array, depois printa
