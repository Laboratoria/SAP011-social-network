export default () => {
    const container = document.createElement("div");
    const template = `
       <h1> Login </h1>
       <li><a href="./#registro" id="registroLink">Cadastre-se</a></li>
       <li><a href="./#home" id="homeLink">Logar</a></li>
       `;
    container.innerHTML = template;
    const registroLink = container.querySelector("#registroLink");
    registroLink.addEventListener("click", (event) => {
        event.preventDefault();
        window.location.hash = "#registro";
    })    
    
    return container;
  };