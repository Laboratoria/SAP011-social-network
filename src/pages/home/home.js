// página com botões de email, senha, google e cadastrar

export default () => {
  const container = document.createElement('div'); // adiciona o template

  const template = `
    <section> // Alycia
      <form id="email"> 
        <label>Email</label>
        <input type= "email" placeholder="seu@email.com" name="email"/>
      </form>

      <form id="email-password">
        <label>Senha</label>
        <input type="password" placeholder="digite a senha" name="senha"/>
      </form>
    </section>
    <p> ----------------------------- OU -------------------------------- </p>
    <section> // Pam 
      <form id ="google-button">
        <button> Botão do Google </button>
      </form>

      <form id="register-login">
        <button>Cadastrar</button>
        <button>Entrar</button>
      </form>
    </section>
      `;

  container.innerHTML = template; // coloco o conteúdo do template dentro do innerhtml
  return container; // vai mostrar na tela o conteudo do template home, o container é a div criada
};
