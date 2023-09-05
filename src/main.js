import home from "./pages/home/home.js";
import login from "./pages/login/login.js";
import criar from "./pages/criar/criar.js";
import favorite from "./pages/favorite/favorite.js";

const main = document.querySelector("#root");
const int = () => {
    window.addEventListener("hashchange", () => { //mudança de rota hashchange
        main.innerHTML = "";
        switch (window.location.hash) {
            case " ":
                main.appendChild(home());
                break;
            case "#login":
                main.appendChild(login());
                break;
            case "#criar":
                main.appendChild(criar());
                break;
            case "#favorite":
                main.appendChild(favorite());
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
