// import { myFunction } from './lib/index.js';

// myFunction();

import home from "./lib/home/home.js";
import register from "./lib/register/register.js";
import welcome from "./lib/welcome/welcome.js";
import timeline from "./lib/timeline/timeline.js";

function getContent(fragmentId) {
  const pages = {
    home: home,
    register: register,
    welcome: welcome,
    timeline: timeline,
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
