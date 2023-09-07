export default () => {
    const container = document.createElement("div");
    const template = `
       <h1> Login </h1>
       <a href="./#registro" id="registroLink">Cadastre-se</a>
       `;
    container.innerHTML = template;
    const registroLink = container.querySelector("#registroLink");
    registroLink.addEventListener("click", (event) => {
        event.preventDefault();
        window.location.hash = "#registro";
    });
    return container;
  };