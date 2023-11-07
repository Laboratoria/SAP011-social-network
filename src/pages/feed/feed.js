import { getAuth } from 'firebase/auth';
import {
  lerPosts,
  createPost,
  editPost,
  deletePost,
  likePost,
} from '../../firebase/firestore.js';
import { exit } from '../../firebase/firebase.js';
import editbutton from '../../img/editbutton.png';
import home from '../../img/home.png';
import about from '../../img/about.png';
import logout from '../../img/logout.png';
import favoritebutton from '../../img/favorite.png';
import savepostbutton from '../../img/savepost.png';
import deletebutton from '../../img/delete.png';
import { app } from '../../firebase/config.js';

export default () => {
  const container = document.createElement('div');

  const template = `
<header> 
  <section id="menu">
      <a href="/#home"><img class="home" src="${home}" alt="página de login"></a>
      <a href="/#about"><img class="home" src="${about}" alt="ícone sobre nós"></a>
      <img class="logout" src="${logout}" id="exit-btn" type="submit"/>
  </section>     
</header>

<textarea id="new-post-txt" placeholder="Digite seu post aqui..." minlength="20"
maxlength="200" rows=5 cols=20></textarea>

<button id="post-btn" type="submit">Compartilhar</button>
<section id ='posts'>
</section>
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
      <span>${element.userEmail}</span>
      <textarea id="container-posts-${id}" minlength="20" maxlength="200" rows=5 cols=20 readonly>${element.textoDoPost}</textarea>
      <span>${element.likeDoPost}</span><img class="btn-favorite-all" id="favorite-btn-${id}" alt="curtida coração" src="${favoritebutton}" data-postid="${element.idPost}"/>
      ${element.uid === getAuth(app).currentUser.uid ?
    `
      <img class="btn-edit-all" id="edit-btn-${id}" alt="botão editar" src="${editbutton}" data-postid="${element.idPost}"/>
      <img class="btn-save-all" id="save-edit-btn-${id}" alt="salvar edição post" src="${savepostbutton}" data-postid="${element.idPost}"/>
      <img class="btn-delete-all" id="delete-btn-${id}" alt="apagar postagem" class="delete-btn" src="${deletebutton}" data-postid="${element.idPost}"/>
      ` : ''}
      `;
      // operador ternario
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
      if(element.uid === getAuth(app).currentUser.uid) {
        saveButton.addEventListener('click', (event) => {
          editPost(event.target.dataset.postid, textArea.value);
        });
      }

      if (element.uid === getAuth(app).currentUser.uid) {
        editButton.addEventListener('click', (event) => {
          textArea.removeAttribute('readonly');
        });
      }

      const favoriteButtonId = `#favorite-btn-${id}`;
      const postFavorite = postTemplate.querySelector(favoriteButtonId);
      postFavorite.addEventListener('click', (event) => {
        console.log('eu to tentando');
        likePost(event.target.dataset.postid, element.likeDoPost +1);
      });

      const deleteButtonId = `#delete-btn-${id}`;
      if (element.uid === getAuth(app).currentUser.uid) {
        const postDelete = postTemplate.querySelector(deleteButtonId);
        postDelete.addEventListener('click', (event) => {
          if (window.confirm('Certeza que deseja apagar esse post?')) {
            deletePost(event.target.dataset.postid);
          }
        });
      }
      id++
    });
  }

  lerPosts(exibirPost);

  // botão sair
  const exitBtn = container.querySelector('#exit-btn');
  exitBtn.addEventListener('click', exit);

  return container;
};
