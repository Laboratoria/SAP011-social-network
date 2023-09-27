export default () => {
    const container = document.createElement("div");

    const template = `
      <h2>about</h2>
      <p>conteudo</p></>
      `;

    container.innerHTML = template;
    return container;
    };