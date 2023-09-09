import { cadastro } from "./lib/Cadastro/cadastro.js";
import { linhaDoTempo } from "./lib/linhaDoTempo/linhaDoTempo.js";
import { telaInicial } from "./lib/telaInicial/telaInicial.js";

const conteudo = document.querySelector("#conteudo");

const iniciarPagina = () => {
  window.addEventListener("hashchange", () => {
    conteudo.innerHTML = "";
    switch (window.location.hash) {
      case "":
        conteudo.appendChild(telaInicial());
        break;
      case "#cadastro":
        conteudo.appendChild(cadastro());
        break;
      case "#linhaDoTempo":
        conteudo.appendChild(linhaDoTempo());
        break;
      default:
        conteudo.appendChild(telaInicial());
    }
  });
  window.addEventListener("load", () => {
    conteudo.appendChild(telaInicial());
    iniciarPagina();
  });
};

iniciarPagina();
