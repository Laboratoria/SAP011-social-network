export default () => {
  const linhaDoTempo = document.createElement('div');

  const conteudo = `
  <html>
  <body>
  <header>Usuário</header>
  <a href="#home">Sair</a>
  </body>
  </html>
  `;

  linhaDoTempo.innerHTML = conteudo;

  return linhaDoTempo;
};
