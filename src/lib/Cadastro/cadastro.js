export default () => {
  const cadastro = document.createElement(`div`);
  const ancora = document.createElement("a");
  const conteudo = `
  <h1>Cadastro</h1>
  <a  href="#cadastro./src/lib/Linha do Tempo/linhaDoTempo.js" >Linha do tempo</a>
  `;

  cadastro.appendChild(ancora);

  ancora.textContent = conteudo;
  ancora.href = "#telaInicial";

  return cadastro;
};
