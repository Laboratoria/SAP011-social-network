export const login = () => {
  const container = document.createElement('section');
  container.innerHTML = `
    <!--<form action="feed.html>" --!>
    <form class="login-container"> 
      <h3 class="titulo">LOGIN</h3>
        <label>E-mail:</label>
          <input name="email" class="email" placeholder="seu@email.com">
          <div class="error">E-mail e obrigatorio</div>
          <div class="error">E-mail ivalido</div>
          <br>

        <label>Senha:</label>
          <input name="password" class="key" placeholder="Digite sua senha.">
          <div class="error">Senha e obrigatoria</div>
          <div class="error">Senha invalida</div>
          <button type="button" class="clear" disable="true" id="enter">Entrar</button>
          <button type="button" class="clear" disable="true" id="recover">Recuperar senha</button>
          <button type="button" class="solid" disable="true"id="register" value="cadastrar">Cadastre-se</button>
          
          <br>
          
          <label>Faça login com:</label>
          <button id="Google" >Google</button>
    </form>
    `;
  return container;
};
