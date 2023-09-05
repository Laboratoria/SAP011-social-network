import home from "./pages/home/index.js";
import login from "./pages/login/index.js";
import favorite from "./pages/favorite/index.js";
import registro from "./pages/registro/index.js";


const main = document.querySelector("#root");
const int = () => {
    window.addEventListener("hashchange", () => {  //mudança de rota hashchange
    main.innerHTML = "";
    switch (window.location.hash) {
        case " ":
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
            break;
        default:
            main.appendChild(home());
    }
    })
}
    window.addEventListener("load", () => {
    main.appendChild(home());
    int();
})
