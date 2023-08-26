export default () => {
  const main = document.getElementById("app");
  const screen = `
  <section id="main-welcome">
  <h1>Boas-vindas!</h1>

  <h3>
    Seu cadastro foi <br />
    realizado com sucesso!
  </h3>

  <a href="#register" id="toTimeline">Ver postagens</a>

  <div class="decoration" id="green-ball"></div>
  <div class="decoration" id="purple-ball">
    <img src="./img/person-in-ball.png" alt="" />
  </div>
</section>
    `;

  main.innerHTML = screen;
  return main;
};
