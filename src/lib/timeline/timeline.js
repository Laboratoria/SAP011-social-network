import { exit, getUserInfo } from "../../firebase/auth.js";

const screen = `
      <section id="main-timeline">
        <div id="div-logo">
            <img class="logo" src="./img/logo-top-timeline.png" alt="MyPet logo">

            <button id="signout-button" type="button"><img class="logout" src="./img/exit-icon.png" alt=""></button>
            
        </div>

          <div id="feed">

            <div id="feed-container">
                <p id="empty-feed">Ainda não temos postagens por aqui. <br><br> <img src="./img/angry-cat.gif" alt="Cat Meme"></p>
            </div>

            <div id="input-container">
              <input type="text" name="post" placeholder="Publique algo" id="postPlace"/>
              <button id="publish-button" type="button"><img src="./img/send-button-white.png" alt="Send Button"></button>
            </div>

          </div>

          <div id="functions">

            <button id="home-button" type="button"><img src="./img/feed-home-icon.png" alt=""></button>

            <button id="search-button" type="button"><img src="./img/feed-search-icon.png" alt="sair"></button>

            <button id="my-post-button" type="button"><img src="./img/feed-post-icon.png" alt="minhas postagens"></button>

            <button id="profile-button" type="button"><img src="./img/feed-profile-icon.png" alt="meu perfil"></button>

        </div>
      </section>`;

export default () => {
  const container = document.getElementById("app");
  container.innerHTML = screen;

  const exitBtn = document.getElementById("signout-button");
  exitBtn.addEventListener("click", exit);

  const backToTop = document.querySelector("#home-button");
  const feed = document.querySelector("#feed-container");
  backToTop.addEventListener("click", function () {
    feed.scrollTo(0, 0);
  });

  const postButton = document.getElementById("publish-button");
  const postPlace = document.getElementById("postPlace");

  // const user = getUserInfo();
  function teste() {
    console.log(getUserInfo());
  }
  teste();

  // FUNÇÃO DE POSTAR CONTEÚDO
  function postIt() {
    // console.log(user.email);
    console.log(postPlace.value);
    const erased = document.getElementById("empty-feed");

    if (postPlace.value !== "" && erased) {
      const post = document.createElement("div");

      // LAYOUT DA POSTAGEM
      const postLayout = `
        <div class="post">
          <div class="user-info">
            <img src="./img/post-photo1-no-bg.png" alt="Foto do perfil">
            <div class="post-text">
              <p class="username">@meu-pet-é-lindo diz:</p>
              <p class="text">${postPlace.value}</p>
            </div>
          </div>
          <div class="likes">
            <p>0</p>
            <img class="heart" src="./img/post-no-likes.png" alt="Likes">
          </div>
        </div>`;

      post.innerHTML = postLayout;

      document.getElementById("feed-container").appendChild(post);
      erased.parentNode.removeChild(erased);
      postPlace.value = "";
    } else if (postPlace.value !== "" && !erased) {
      const post = document.createElement("div");

      // LAYOUT DA POSTAGEM
      const postLayout = `
        <div class="post">
          <div class="user-info">
            <img src="./img/post-photo1-no-bg.png" alt="Foto do perfil">
            <div class="post-text">
              <p class="username">@meu-pet-é-lindo diz:</p>
              <p class="text">${postPlace.value}</p>
            </div>
          </div>
          <div class="likes">
            <p>0</p>
            <img class="heart" src="./img/post-no-likes.png" alt="Likes">
          </div>
        </div>`;

      post.innerHTML = postLayout;
      document.getElementById("feed-container").appendChild(post);
      postPlace.value = "";
    }
  }

  postButton.addEventListener("click", postIt);
};
