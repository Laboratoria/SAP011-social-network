const screen = `
      <section id="main-timeline">
        <div id="div-logo">
            <img src="./img/logo-top-timeline.png" alt="MyPet logo">
        </div>
        <div id="feed">
          <p>Aqui ficam as postagens</p>
        </div>
        <div id="functions">
          <a href="#login"><img src="./img/feed-exit-icon.png" alt=""></a>
          <a href=""><img src="./img/feed-search-icon.png" alt=""></a>
          <a href=""><img src="./img/feed-post-icon.png" alt=""></a>
          <a href=""><img src="./img/feed-profile-icon.png" alt=""></a>
        </div>
      </section>`;

export default () => {
  const container = document.getElementById("app");
  container.innerHTML = screen;
};
