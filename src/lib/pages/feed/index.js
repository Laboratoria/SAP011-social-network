import './feed.css';


export const feed = () => {
    const container = document.createElement("section");
    container.innerHTML = `
    <body class="body-feed">

    <header class="header">
      <!-- BARRA DE NAVEGAÇÃO PRINCIPAL -->
      <img class="logo" src="../../../Imagens/logosvg.svg"></img>  
        
      
  
    </header>
    <main>
      <section class="menu-fixo">
        <div class="container">
          <img class="#" src="../../../Imagens/Img feed/rede comentarios.png" href="#"></img> 
      
        <img class="#" src="../../../Imagens/Img feed/icon.noticias.png" href="#"></img> 

       
        <img class="#" src="../../../Imagens/Img feed/artigo 1.png" href="#"></img> 
        </div>
      </section>
    </main>




    <section> 
    <div class="inserirPost">

    </div>
  </section>

  <div id="input-container">
    <input type="text" name="post" placeholder="publicação" id="postagem"/>
    <button id="publish-button" type="button"><img src="" alt="Send Button"></button>
    <button id=""></button>
  </div>
  </body>
      `;
    return container;
  };