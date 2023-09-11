export default () => {
  const cadastro = document.createElement('div');

  const conteudo = ` 

  <html>
  <head>
    <title id="tituloPagina">Criar Conta</title>
  </head>
  <body>
    <main id="mainCadastro"
    <div>
      <form id="formulario">
        <h1>Criar Conta</h1>
        <label><input id="nomeUsuario" type="text" name="nome"><input></label>
        <label> <input id= "email" type="email" name="email"><input></label>
        <label> <input id= "senha" type="password" name="senha"><input></label>
        <label><input id="dataNascimento" type="date" name="dataDeNascimento"><input></label>
        <a id="criarContaCadastro" href="#linhaDoTempo">Criar conta</a>
      </form>
      </div>
    </main>
  </body>
</html>`;

  cadastro.innerHTML = conteudo;
  return cadastro;
};
