export default () => {
  const container = document.createElement('div');

  const conteudo = `
          <h1 id= "tituloPagina">BUG DOS <br> MILLENNIALS</h1>
        <section id="fundoTelaInicial">
          <form>
          <label> <p id="emailDaTela">Email</p> <input id= "emailTelaInicial" type="email name="email"></input></label>
          <label> <p id="senhaDaTela">Senha</p> <input id= "senhaTelaInicial" type="password" name="senha"></input></label>
          <a id="botaoEntrar" href="#linhaDoTempo">Entrar</a>
        </form>
        <nav>
          <p id="entrarGoogle">Entre com sua conta Google</p>
          <img id="logoGoogle" src="imagens/logo google.png"><img>
          <div id="novaConta"
            <p class="criarConta"> Não tem conta? </p> 
              <a id="botaoCadastro" href="#cadastro">Crie agora</a>
          </div>
        </nav>
        </section>
        `;

  container.innerHTML = conteudo;

  return container;
};
