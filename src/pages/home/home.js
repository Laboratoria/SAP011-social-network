export default () => {
  const container = document.createElement('div'); //a div adiciona todo o template

  const template = `
      <body>
        <header>
          <img src="src/img/logotipo.png" alt="Logotipo">
        </header>
        
      <h2>titulo</h2>
      <p>paragrafo</p></>
      </body>
      `;

  container.innerHTML = template;
  return container;
};
