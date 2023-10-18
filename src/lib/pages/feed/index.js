import { readPosts } from '../../../firebase/firestore';
import './feed.css';

export const feed = () => {
    const container = document.createElement("section");
    container.innerHTML = `
        <div class="container">
          <img class="#" src="../../../Imagens/Img feed/rede comentarios.png" href="#"></img> 
      
          <img class="#" src="../../../Imagens/Img feed/icon.noticias.png" href="#"></img> 

          <img class="#" src="../../../Imagens/Img feed/artigo 1.png" href="#"></img> 
      </div>
      <div id="input-container">
      <h3>name<h3>
        <input type="text" name="post" placeholder="publicação" id="postagem"/>
        <button id="publish-button" type="button"><img src="" alt="Send Button"></button>
        <button id=""></button>
      </div>

  <div id="input-container">
  <h3>name<h3>
    <input type="text" name="post" placeholder="publicação" id="postagem"/>
    <button id="edit-button" type="button"><img src="" alt="Edit Button"></button>
    <button id="delete-button" type="button"><img src="" alt="Delete Button"></button>
  </div>
 
      `;

      container.addEventListener('load', () => {
        readPosts();
      });
    return container;
  };