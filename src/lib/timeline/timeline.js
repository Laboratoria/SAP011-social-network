const screen = `
      <section id="main-timeline">
        <div id="div-logo">
            <img class="logo" src="./img/logo-top-timeline.png" alt="MyPet logo">

            <button id="signout-button" type="button"><img class="logout" src="./img/exit-icon.png" alt=""></button>
            
        </div>

          <div id="feed">

            <div id="feed-container">
              <div id="empty-feed">
                <p>Ainda não temos postagens por aqui.</p>
                <img src="./img/angry-cat.gif" alt="Cat Meme">
              </div>
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

  const backToTop = document.querySelector("#home-button");
  const feed = document.querySelector("#feed-container");
  backToTop.addEventListener("click", function () {
    feed.scrollTo(0, 0);
  });

  const postButton = document.getElementById("publish-button");
  const postPlace = document.getElementById("postPlace");

  function postIt() {
    console.log(postPlace.value);
    const erased = document.getElementById("empty-feed");

    if (postPlace.value !== "" && erased) {
      const post = document.createElement("div");
      post.innerHTML = postPlace.value;
      post.style.width = "90%";
      post.style.height = "fit-content";
      post.style.display = "flex";
      post.style.flexWrap = "wrap";
      post.style.backgroundColor = "#fff";
      post.style.margin = "5px 0";
      post.style.padding = "5px";
      post.style.alignItems = "center";

      document.getElementById("feed-container").appendChild(post);

      erased.parentNode.removeChild(erased);

      postPlace.value = "";
    } else if (postPlace.value !== "" && !erased) {
      const post = document.createElement("div");
      post.innerHTML = postPlace.value;
      post.style.width = "90%";
      post.style.height = "fit-content";
      post.style.display = "flex";
      post.style.flexWrap = "wrap";
      post.style.backgroundColor = "#fff";
      post.style.margin = "5px 0";
      post.style.padding = "5px";
      post.style.alignItems = "center";

      document.getElementById("feed-container").appendChild(post);

      postPlace.value = "";
    }
  }

  postButton.addEventListener("click", postIt);
};
