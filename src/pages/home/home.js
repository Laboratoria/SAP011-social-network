export default () => {
    const container = document.createElement("div");

    const template = `
    <form>
    <input type= "email" placeholder="E-mail" name="email"/>
    <input type="password" placeholder="Senha" name="senha"/>
    </form>
      `;

    container.innerHTML = template;
    return container;
    };