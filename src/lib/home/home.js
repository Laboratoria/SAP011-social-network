export const home = () => {
  const container = document.getElementById("app");
  const screen = `
    <section id="main-home">
    <h1>Aqui fica a Home</h1> 
    <p><a href="#register">Ir para tela de registro</a></p>
    </section>`;
  container.innerHTML = screen;
};
