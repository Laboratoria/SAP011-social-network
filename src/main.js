import { home } from "./lib/home/home.js";
import { register } from "./lib/register/register.js";
import { welcome } from "./lib/welcome/welcome.js";
import { timeline } from "./lib/timeline/timeline.js";

function loadContent() {
  const fragmentId = location.hash.substring(1);
  console.log(fragmentId);
  if (fragmentId === "register") {
    register();
  }
  if (fragmentId === "welcome") {
    welcome();
  }
  if (fragmentId === "timeline") {
    timeline();
  }
  if (fragmentId === "home") {
    home();
  }
}

if (!location.hash) {
  location.hash = "#home";
}

loadContent();
window.addEventListener("hashchange", loadContent);
