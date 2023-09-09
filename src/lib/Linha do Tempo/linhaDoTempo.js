export default () => {
  const linhaDoTempo = document.createElement("div");

  const conteudo = `<a  href="#linhadotempo./src/lib/Linha do Tempo/linhaDoTempo.js" >Linha do tempo</a>`;
  conteudo.innerHTML = linhaDoTempo;

  linhaDoTempo.appendChild(ancora);

  ancora.textContent = conteudo;
  linhaDoTempo.innerHTML = conteudo;

  ancora.href = "#linhaDoTempo";

  return linhaDoTempo;
};
