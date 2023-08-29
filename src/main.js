import home from "./lib/home/home.js";
import register from "./lib/register/register.js";
import welcome from "./lib/welcome/welcome.js";
import timeline from "./lib/timeline/timeline.js";

function loadContent() {
  const fragmentId = location.hash.substring(1);
  console.log(fragmentId);
  switch (fragmentId) {
    case "register":
      register();
      break;
    case "welcome":
      welcome();
      break;
    case "timeline":
      timeline();
      break;
    default:
      home();
  }
}

if (!location.hash) {
  location.hash = "#home";
}

loadContent();
window.addEventListener("hashchange", loadContent);
