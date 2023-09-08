const screen = `
      <section id="main-timeline">
        <div id="div-logo">
            <img class="logo" src="./img/logo-top-timeline.png" alt="MyPet logo">

            <button id="signout-button" type="button"><img class="logout" src="./img/exit-icon.png" alt=""></button>
            
        </div>
        <div id="container">

          <div id="feed">

            <div id="feed-container">
              <p>Ainda não temos postagens por aqui.</p>
              <img src="./img/angry-cat.gif" alt="Cat Meme">
              <p>Seja o primeiro!</p>
            </div>

            <div id="input-container">
              <input type="text" name="post" placeholder="Publique algo" id="postPlace"/>
            </div>

          </div>

          <div id="functions">

            <button id="home-button" type="button"><img src="./img/feed-home-icon.png" alt=""></button>

            <button id="search-button" type="button"><img src="./img/feed-search-icon.png" alt="sair"></button>

            <button id="post-button" type="button"><img src="./img/feed-post-icon.png" alt=""></button>

            <button id="profile-button" type="button"><img src="./img/feed-profile-icon.png" alt=""></button>

          </div>
        </div>
      </section>`;

export default () => {
  const container = document.getElementById("app");
  container.innerHTML = screen;

  const backToTop = document.querySelector("#home-button");
  const feed = document.querySelector("#feed-container");
  backToTop.addEventListener("click", function () {
    feed.scrollTo(0, 0);
  });

  const postButton = document.getElementById("post-button");
  const postPlace = document.getElementById("postPlace");

  function postIt() {
    console.log(postPlace.value);
    if (postPlace.value !== "") {
      feed.innerHTML = postPlace.value;
    }
  }

  postButton.addEventListener("click", postIt);
};
