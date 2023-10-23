import { lerPosts } from '../../firebase/firestore.js';
import editbutton from '../../img/editbutton.png';

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

<button id="post-btn" type="submit" alt="botão de postar">Postar</button>

</section>

      `;

  container.innerHTML = template;

  container.querySelector('#post-btn').addEventListener('click', () => {
    const newPost = container.querySelector('#new-post-txt').value;
    console.log(newPost);
  });

  lerPosts(exibirPost);

  function exibirPost(posts) {
    const postsExibir = container.querySelector('#posts');
    posts.forEach((element) => {
      const containerPosts = `
      <label id="container-posts"></label>
      <textarea id="container-posts" minlength="20" maxlength="200" rows=5 cols=20 readonly>${element.textoDoPost}</textarea>
      <img id="edit-btn" alt="botão editar" src="${editbutton}"/>
      <img width="16" height="16" src="https://img.icons8.com/ios/50/hearts--v1.png" alt="hearts--v1" alt="curtida coração"/>
      `;
      postsExibir.innerHTML += containerPosts;
    });
  }

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