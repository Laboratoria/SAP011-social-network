export default () => {
    const container = document.createElement("div");

    const template = `
      <h2>about</h2>
      <p>conteudo</p>
      `;
// window.querySelector("#teste").addEventListener("click"); () => {
//     window.location.hash = "#feed";
// };
    container.innerHTML = template;
    return container;
    };