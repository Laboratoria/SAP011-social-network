export default () => {
    const container = document.createElement("div");

    const template = `
      <h2>feed</h2>
      <p>conteudo</p></>
      `;

    container.innerHTML = template;
    return container;
    };