const screen = `
      <section id="main-timeline">
        <div id="div-logo">
            <img class="logo" src="./img/logo-top-timeline.png" alt="MyPet logo">

            <button id="home-button" type="button"><img class="logout" src="./img/exit-icon.png" alt=""></button>
            
        </div>
        <div id="container">
          <div id="feed">
            <p>Aqui ficam as postagens</p>
          </div>
          <div id="functions">

            <button id="home-button" type="button"><img src="./img/feed-home-icon.png" alt=""></button>

            <button id="search-button" type="button"><img src="./img/feed-search-icon.png" alt="sair"></button>

            <button id="search-button" type="button"><img src="./img/feed-post-icon.png" alt=""></button>

            <button id="search-button" type="button"><img src="./img/feed-profile-icon.png" alt=""></button>

          </div>
        </div>
      </section>`;

export default () => {
  const container = document.getElementById("app");
  container.innerHTML = screen;

  const backToTop = document.querySelector("#home-button");
  const feed = document.querySelector("#feed");
  backToTop.addEventListener("click", function () {
    feed.scrollTo(0, 0);
  });
};
