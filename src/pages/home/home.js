// página com botões de email, senha, google e cadastrar
import logotipo from '../../img/logo.png';
// importar cada função de cada ação, login e senho, login pelo google
export default () => {
  const container = document.createElement('div'); // adiciona o template

  const template = `
    <header>
    <img class="logo-header" src=${logotipo} alt="Mulher segurando um prato com alimentos">
    </header>

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
    <p> --------------- OU -----------------</p>
    <section> // Pam 
      <form id ="google-button">
        <button> Botão do Google </button>
      </form>

      <form id="register-login">
        <button id="register-btn">Cadastrar</button>
        <button id="enter-btn">Entrar</button>
      </form>
    </section>
      `;

  container.innerHTML = template; // coloco o conteúdo do template dentro do innerhtml

  // email e senha

  // botão do google

  // botão cadastrar
  const registerBtn = container.querySelector('#register-btn'); // variável que pega a ação do botão
  registerBtn.addEventListener('click', () => { // cadastrar e cria a página de cadastro
    console.log('cliquei');
    window.location.hash = '#register'; // para abrir a página de register
  });

  // botão entrar
  const enterBtn = container.querySelector('#enter-btn');
  enterBtn.addEventListener('click', () => {
    console.log('entrei');
    window.location.hash = '#feed'; // manda para o feed
  });

  return container; // vai mostrar na tela o conteudo do template home, o container é a div criada
};
