import './lib/pages/feed/feed.css';
export const feed = () => {
    const container = document.createElement("section");
    container.innerHTML = `
    <section> 
    <div class="inserirPost">

    </div>
  </section>

  <div id="input-container">
    <input type="text" name="post" placeholder="publicação" id="postagem"/>
    <button id="publish-button" type="button"><img src="" alt="Send Button"></button>
    <button id=""></button>
  </div>
      `;
    return container;
  };