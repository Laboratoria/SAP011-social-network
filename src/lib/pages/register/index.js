export const register = () => {
  const container = document.createElement("section");
  container.innerHTML = `
  <form class="login-container"> 
      <h1>Bem vindo a Green Med(a)<h1>
        <label>E-mail:</label>
          <input type="email" class="email" placeholder="seu@e-mail.com">
        <label>senha:</label>
          <input type="password" name="password" placeholder="Digite sua senha.">
        <label>Nascimento:</label>
          <input type="date" id="date">
          <button type="button" class="solid" disable="true"id="register" value="cadastrar">Cadastrar</button>
        <label>Faça login com:</label>
          <button type="button" id="Gmail">Google</button>
    </form>
    `;
  return container;
};
