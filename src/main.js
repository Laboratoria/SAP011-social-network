// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';

// myFunction();

function getContent(fragmentId) {
  const pages = {
    home: "This is the Home page. Welcome to my site.",
    about: "This page will describe what my site is about",
    contact: "Contact me on this page if you have any questions",
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
