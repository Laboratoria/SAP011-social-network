

import iconFeed from '../../../Imagens/Img feed/rede comentarios.png';
import iconNoticias from '../../../Imagens/Img feed/icon.noticias.png';
import iconArtigos from '../../../Imagens/Img feed/artigo 1.png';
import iconEnviar from '../../../Imagens/Img feed/icon-enviarposter.png'

import { readPosts } from '../../../firebase/firestore';
import './feed.css';



export const feed = () => {
  const container = document.createElement("section");
  container.innerHTML = `
        <div class="container">
          <img class="#" src="${iconFeed}" href="#"></img>       
          <img class="#" src="${iconNoticias}" href="#"></img> 
          <img class="#" src="${iconArtigos}" href="#"></img> 
      </div>
      <div id="input-container">
       <div><h3>name<h3></div> 
        <input type="text" name="post" placeholder="publicação" id="post"/>
        <button id="publish-button" type="button"><img src="${iconEnviar}" alt="Send Button"></button>
        
      </div>

      <section id="input-container">
      <div id="post"></div>
      </section>
       
      `;

  let viewPost = container.querySelector("#post");

  readPosts((posts) => {
    console.log(posts);
    posts.forEach(post => {
      const template = document.createElement('div');
      template.innerHTML = `<h3>name<h3>
          <div type="text" id="post">${post.textOfPost}</div>
          <div type="date"> ${post.dateOfPost}</div>
          <button id="edit-button" type="button"><img src="" alt="Edit Button"></button>
          <button id="delete-button" type="button"><img src="" alt="Delete Button"></button>`;
      viewPost.appendChild(template)
    });

  });




  return container;
};


/* logica 

CRIAR UMA SECTION PRINCIPAL {
  Que recebe:
  * Poster [ input, botão enviar, nome usuario e foto usuario]
  *Vai aparecer o poster criado [vai ter editar, apagar e like]
}*/