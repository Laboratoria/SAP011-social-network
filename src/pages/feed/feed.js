import {
  lerPosts,
  createPost,
  editPost,
  deletePost,
  likePost,
} from '../../firebase/firestore.js';
import { exit } from '../../firebase/firebase.js';
import editbutton from '../../img/editbutton.png';
import favoritebutton from '../../img/favorite.png';
import savepostbutton from '../../img/savepost.png';
import deletebutton from '../../img/delete.png';
import { queryEqual } from 'firebase/firestore';

export default () => {
  const container = document.createElement('div');

  const template = `
<header> 
<button type="submit">Sobre</button> <button id="exit-btn" type="submit">Sair</button> 
</header>

<label>Nome</label>
<p>
<textarea id="new-post-txt" placeholder="Digite seu post aqui..." minlength="20"
maxlength="200" rows=5 cols=20>
</textarea>
<p>
<button id="post-btn" type="submit">Postar</button>
<p>
<i class="material-icons custom-icon like" id="like">
<!-- <a href="/#feed">favorite</a></i> -->
<p>

<section id ='posts'></section>
      `;

  container.innerHTML = template;

  container.querySelector('#post-btn').addEventListener('click', () => {
    const newPost = container.querySelector('#new-post-txt').value;
    createPost(newPost);
  });

  function exibirPost(posts) {
    const postsExibir = container.querySelector('#posts');
    let id = 1;
    postsExibir.innerHTML = ' '; // limpa a tela e começa a colocar os posts em tela
    posts.forEach((element) => {
      const postTemplate = document.createElement('div');
      const containerPosts = `
      <label id="label-posts-${id}"></label>
      <textarea id="container-posts-${id}" minlength="20" maxlength="200" rows=5 cols=20 readonly>${element.textoDoPost}</textarea>
      <img class="btn-edit-all" id="edit-btn-${id}" alt="botão editar" src="${editbutton}" data-postid="${element.idPost}"/>
      <img class="btn-save-all" id="save-edit-btn-${id}" alt="salvar edição post" src="${savepostbutton}" data-postid="${element.idPost}"/>
      <span>${element.likeDoPost}</span><img class="btn-favorite-all" id="favorite-btn-${id}" alt="curtida coração" src="${favoritebutton}" data-postid="${element.idPost}"/>
      <img class="btn-delete-all" id="delete-btn-${id}" alt="apagar postagem" class="delete-btn" src="${deletebutton}" data-postid="${element.idPost}"/>
      `;
      postTemplate.innerHTML = containerPosts;

      postsExibir.appendChild(postTemplate);

      // pegando o botão editar
      const buttonId = `#edit-btn-${id}`;
      const editButton = postTemplate.querySelector(buttonId);
      console.log(editButton);

      // para salvar a edição feita no template string
      const buttonSaveId = `#save-edit-btn-${id}`;
      const saveButton = postTemplate.querySelector(buttonSaveId);
      const textArea = postTemplate.querySelector(`#container-posts-${id}`);
      saveButton.addEventListener('click', (event) => {
        editPost(event.target.dataset.postid, textArea.value);
      });

      editButton.addEventListener('click', (event) => {
        console.log(textArea, `#container-posts-${id}`);
        textArea.removeAttribute('readonly');
      });

      // /*container.querySelector('#favorite-btn').addEventListener('click', (event) => {
      // console.log(event.target.dataset);
      // });*/

      const favoriteButtonId = `#favorite-btn-${id}`;
      const postFavorite = postTemplate.querySelector(favoriteButtonId);
      postFavorite.addEventListener('click', (event) => {
        console.log('eu to tentando');
        likePost(event.target.dataset.postid, element.likeDoPost +1);
      });

      const deleteButtonId = `#delete-btn-${id}`;
      const postDelete = postTemplate.querySelector(deleteButtonId);
      postDelete.addEventListener('click', (event) => {
        console.log('eu to tentando');
        deletePost(event.target.dataset.postid);
      });
      id++
    });
  }

  lerPosts(exibirPost);

  // botão sair
  const exitBtn = container.querySelector('#exit-btn');
  exitBtn.addEventListener('click', exit);

  // editPost
  // const buttonEdit = container.querySelector('#edit-btn').addEventListener('click', () => {
  //   editPost(newText, dataPost)
  //     .then(() => {

  //     })
  //     // botão clicado, linkar com qual caixa de texto? a externa ou a interna?
  //     // pego o texto a ser editado pelo id?

  //     .catch((error) => {
  //       alert('erro ao atualizar postagem', error);
  //     });

  // likePost
  // container.querySelector('#favorite-btn').addEventListener('click', (event) => {
  //   console.log(event.target.dataset)
  //   likePost(likePost);
  // });

  return container;
};
