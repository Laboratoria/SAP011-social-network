export const login = () => {
  const container = document.createElement('section');
  container.innerHTML = `
    <!--<form action="feed.html>" --!>
    <form class="login-container"> 
      <h3 class="titulo">LOGIN<h3>
        <label>E-mail:</label>
          <input name="email" class="email" placeholder="seu@email.com">
          <div class="error">E-mail e obrigatorio</div>
          <div class="error">E-mail ivalido</div>
          <br>
        <label>Senha:</label>
          <input name="password" class="key" placeholder="digite sua senha.">
          <div class="error">Senha e obrigatoria</div>
          <div class="error">Senha invalida</div>
          <button type="button" class="solid" disable="true"id="register" value="cadastrar">Cadastrar</button>
          <button type="button" class="clear" disable="true" id="recover">recuperar senha</button>
          <br>
          <label>Preencher com o:</label>
          <button id="Gmail" >Gmail</button>
    </form>
    `;
  return container;
};
