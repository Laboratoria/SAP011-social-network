export default () => {
  const container = document.createElement('div');

  const template = `
      <h2>Este é o feed de notícias</h2>
      <p>conteudo</p></>
      `;

  container.innerHTML = template;
  return container;
};
