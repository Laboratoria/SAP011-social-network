export default () => {
  const container = document.getElementById("app");
  const screen = `
    <section id="main-timeline">
      <div id="div-logo">
          <img src="./img/logo-top-timeline.png" alt="MyPet logo">
      </div>
      <p> Estamos na timeline </p>
      <a href="#login">Voltar para login</a>
    </section>`;
  container.innerHTML = screen;
};
