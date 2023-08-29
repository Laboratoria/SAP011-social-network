export default () => {
  const container = document.getElementById("app");
  const screen = `
    <section id="main-timeline">
    <h1>Aqui fica a timeline</h1> 
    <p><a href="#home">Voltar para Home</a></p>
    </section>`;
  container.innerHTML = screen;
};
