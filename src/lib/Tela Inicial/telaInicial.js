export default () => {
  const container = document.createElement("div");

  const conteudo = `
  <a  href="#./src/lib/Linha do Tempo/linhaDoTempo.js" ></a>
    <html>
      <head>
        <title>BUG DOS MILLENNIALS</title>
      </head>
      <body>
        <main>
          <form>
            <h1>BUG DOS MILLENNIALS</h1>
            <p>Email</p>
            <input type="email" name="email">
            <p>Senha</p>
            <input type="password" name="password">
            <br>
            <a href="#linhaDoTempo">Entrar</a>
          </form>
          <nav>
            <p>Não tem conta?</p>
            <a href="#cadastro">Crie agora</a>
          </nav>
        </main>
      </body>
    </html>`;

  container.innerHTML = conteudo;

  return container;
};
