
export const login = () => {
    const container =document.createElement("section");
    container.innerHTML = `
    <!--<form action="feed.html>" --!>
    <form>
      <h3>Entrar<h3>
        <label>E-mail:</label>
          <input name="email" class="email" placeholder="seu@email.com">
          <div class="error">E-mail é obrigatorio</div>
          <div class="error">E-mail ivalido</div>
        <label>Senha:</label>
          <input name="password" class="key" placeholder="digite sua senha.">
          <div class="error">Senha é obrigatoria</div>
          <div class="error">Senha ivalido</div>
          <button type="button" class="solid" disable="true"id="register" value="cadastrar">Cadastrar</button>
          <button type="button" class="clear" disable="true" id="recover">recuperar senha</button>
        <label>Preencher com o:</label>
          <button id="Gmail" >Gmail</button>
    </form>
    `;
    return container
  };

