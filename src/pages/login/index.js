import {login} from "../../firebase.js";

export default () => {
    const container = document.createElement("div");
    const template = `
       <h1> Login </h1>
       <a href="./#registro">Sing Up</a>
       <button id="teste">Teste aqui</button>
       `;
    container.innerHTML = template;

   function teste(){

      const trylogin = document.querySelector("#teste");

      trylogin.addEventListener("click", login);
   }
    return container;
  };


