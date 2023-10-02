export default () => {
    const container = document.createElement("div");

    const template = `
      <h2>titulo</h2>
      <p>paragrafo</p>
      `;

    container.innerHTML = template;
    return container;
    };

    