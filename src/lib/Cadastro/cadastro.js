export default () => {
  const cadastro = document.createElement('div');

  const conteudo = ` 
      <h1 id="criarContaTitulo">Crie sua Conta</h1>
        <section id="fundoCadastro">
      <form id="formulario">
        <label> <p class = "campoCadastro"> Nome </p> <input id="nomeUsuario" type="text" name="nome"></input></label>
        <label> <p class = "campoCadastro"> Email </p> <input id= "email" type="email" name="email"></input></label>
        <label> <p class = "campoCadastro"> Senha </p> <input id= "senha" type="password" name="senha"></input></label>
        <label> <p class = "campoCadastro"> Data de Nascimento </p> <input id="dataNascimento" type="date" name="dataDeNascimento"></input></label>
        <a id="criarContaCadastro" href="#linhaDoTempo">Criar conta</a>
      </form>
        </section>
      
`;

  cadastro.innerHTML = conteudo;
  return cadastro;
};
