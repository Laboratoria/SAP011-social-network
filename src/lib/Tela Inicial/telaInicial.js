export default () => {
  const container = document.createElement("div");

  const conteudo = `
    <html>
      <head>
        <title id="tituloPagina">BUG DOS MILLENNIALS</title>
      </head>
      <body>
        <main>
        <div>
          <form>
            <h1>BUG DOS MILLENNIALS</h1>
            <label> <input id= "email" type="email" name="email"><input></label>
            <label> <input id= "senha" type="password" name="senha"><input></label>
            <a id="botaoEntrar" href="#linhaDoTempo">Entrar</a>
          </form>
          <nav>
            <p id="entrarGoogle">Entre com sua conta Google</p>
            <img id="logoGoogle" src="imagens/logo google.png"><img>
            <p id="criarConta">Não tem conta?</p>
            <a id="botaoCadastro" href="#cadastro">Crie agora</a>
          </nav>
          </div>
        </main>
      </body>
    </html>`;

  container.innerHTML = conteudo;

  return container;
};
