import { exit, getUserInfo } from "../../firebase/auth.js";
import meme from "../../img/angry-cat.gif";
import feedLogo from "../../img/logo-top-timeline.png";
import exitIcon from "../../img/feed-exit-icon.png";
import sendIcon from "../../img/send-button-white.png";
import homeIcon from "../../img/feed-home-icon.png";
import searchIcon from "../../img/feed-search-icon.png";
import postIcon from "../../img/feed-post-icon.png";
import profileIcon from "../../img/feed-profile-icon.png";

const screen = `
      <section id="main-timeline">
        <div id="div-logo">
            <img class="logo" src="${feedLogo}" alt="MyPet logo">

            <button id="signout-button" type="button"><img class="logout" src="${exitIcon}" alt=""></button>
            
        </div>

          <div id="feed">

            <div id="feed-container">
                <p id="empty-feed">Ainda não temos postagens por aqui. <br><br> <img src="${meme}" alt="Cat Meme"></p>
            </div>

            <div id="input-container">
              <input type="text" name="post" placeholder="Publique algo" id="postPlace"/>
              <button id="publish-button" type="button"><img src="${sendIcon}" alt="Send Button"></button>
            </div>

          </div>

          <div id="functions">

            <button id="home-button" type="button"><img src="${homeIcon}" alt=""></button>

            <button id="search-button" type="button"><img src="${searchIcon}" alt="sair"></button>

            <button id="my-post-button" type="button"><img src="${postIcon}" alt="minhas postagens"></button>

            <button id="profile-button" type="button"><img src="${profileIcon}" alt="meu perfil"></button>

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
