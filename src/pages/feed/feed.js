import { lerPosts, createPost } from '../../firebase/firestore.js';
import editbutton from '../../img/editbutton.png';
import favoritebutton from '../../img/favorite.png';

export default () => {
  const container = document.createElement('div');

  const template = `
<header> 
<button type="submit">Sobre</button> <button type="submit">Sair</button> 
</header>

<label>Nome</label>
<section id="posts">
<textarea id="new-post-txt" placeholder="Digite seu post aqui..." minlength="20"
maxlength="200" rows=5 cols=20>
</textarea>

<button id="post-btn" >Postar</button>

</section>

      `;

  container.innerHTML = template;
  console.log("qualquer coisa mesmo")
  console.log(container.querySelector('#post-btn'))
  container.querySelector('#post-btn').addEventListener('click', () => {
    console.log("qualquer coisa");
  });
  // container.querySelector('#post-btn').addEventListener('click', () => {
  //   console.log("qualquer coisa");
  //   // const newPost = container.querySelector('#new-post-txt').value;
  //   // createPost(newPost);
  // });

  function exibirPost(posts) {
    const postsExibir = container.querySelector('#posts');
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

  // editPost
  // const buttonEdit = container.querySelector('#edit-btn').addEventListener('click', () => { // chamar a função do firestore de edição
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
// firebase lê o banco de dados e armazena na array, depois printa em tela