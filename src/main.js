// import { myFunction } from './lib/index.js';

// myFunction();

import register from "./lib/register/register.js";
import welcome from "./lib/welcome/welcome.js";

function getContent(fragmentId) {
  const pages = {
    home: ` Estamos na Home <br> Acesse a tela de boas-vindas do link: <a href="#welcome">Welcome</a>`,
    register: register,
    welcome: welcome,
  };

  return pages[fragmentId];
}

function loadContent() {
  const contentDiv = document.getElementById("app");
  const fragmentId = location.hash.substring(1);
  contentDiv.innerHTML = getContent(fragmentId);
}

if (!location.hash) {
  location.hash = "#home";
}

loadContent();

window.addEventListener("hashchange", loadContent);
