export default () => {
  const container = document.createElement('div');

  const template = `
      <h2>about</h2>
      <p>conteudo</p>
      <input type= "">
      <button>Click Aqui</button>
      </input>
      `;
  // window.querySelector("#teste").addEventListener("click"); () => {
  //     window.location.hash = "#feed";
  // };
  container.innerHTML = template;
  return container;
};
