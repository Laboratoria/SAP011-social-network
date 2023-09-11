import home from "./pages/home/index.js";
import login from "./pages/login/index.js";
import favorite from "./pages/favorite/index.js";
import registro from "./pages/registro/index.js";
import { bindEvents } from "./pages/registro/registro.js";

const main = document.querySelector("#root");
const init = () => {
  //mudança de rota hashchange
  main.innerHTML = "";
  switch (window.location.hash) {
    case "#home":
      main.appendChild(home());
      break;
    case "#login":
      main.appendChild(login());
      break;
    case "#favorite":
      main.appendChild(favorite());
      break;
    case "#registro":
      main.appendChild(registro());

      bindEvents();
      break;

    default:
      main.appendChild(home());
  }
};

window.addEventListener("hashchange", () => {
  init();
});

window.addEventListener("load", () => {
  main.appendChild(login());
  init();
});
