export default () => {
  const linhaDoTempo = document.createElement('div');

  const conteudo = `
    <html>
      <body>
        <header>Usuário</header>
        <button id="botaoSair">Sair</button>
      </body>
    </html>
  `;

  linhaDoTempo.innerHTML = conteudo;

  function sair(event) {
    event.preventDefault();
    firebase.auth().signOut().then(() => {
        window.location.hash = "#telaInicial";
      })
      .catch(() => {
        alert("Erro ao fazer logout");
      });
  }

  const botaoSair = linhaDoTempo.querySelector("#botaoSair");
  botaoSair.addEventListener('click', sair);

  return linhaDoTempo;
};
