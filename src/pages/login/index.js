export default () => {
    const container = document.createElement("div");
    const template = `
       <h1> Login </h1>
       `;
    container.innerHTML = template;
    return container;
  };