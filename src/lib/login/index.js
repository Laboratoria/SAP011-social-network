import firstLogo from '../../assets/Logo-White.png'; // Importa a primeira imagem do logo.
import girl from '../../assets/Composition-Background.png'; // Importa a imagem de fundo com uma garota.
import googleIcon from '../../assets/googlelogo.png'; // Importa o ícone do Google.

export default () => {
  const loginContainer = document.createElement('div'); // Cria um elemento div para o contêiner de login.
  loginContainer.classList.add('login-container'); // Adiciona a classe 'login-container' ao elemento.

  const content = `
      <header class='header-login'>
        <img src='${firstLogo}' alt='logo-eldoria' class='logo'> 
        <p>Dedicado a todos os entusiastas de literatura fantástica</p>
      </header>

      <main>
        <form class='section-login'>
          <h2> Faça login no Eldoria <h2>
          <input type='email' name='email' id='email-login' placeholder='E-mail'>  
          <input type='password' name='password' id='key-login' placeholder='Senha'> 
          <button type='button' class='button-singIn' id='button-login'> Conecte-se </button>
          <a href=''>Esqueceu sua senha?</a>
          <p>ou</p>
          <div class='container-google'>
            <span class='txt-login'> Faça login com sua conta Google: </span>
            <button type='button' class='button-google'>
              <img src='${googleIcon}' class='icon-google' alt='logo-google'> 
            </button>
          </div>
          <hr class='hr-login'>
          <p class='txt-account'>Não tem uma conta?</p>
          <button type='button' id='button-register'> Inscrever-se </button>

        </form>

        <img src='${girl}' alt='girl-background' class='girl'> 
      </main>
    `;

  loginContainer.innerHTML = content; // Insere o conteúdo HTML dentro do contêiner.

  const buttonRegister = loginContainer.querySelector('#button-register'); // Seleciona o botão de registro.
  buttonRegister.addEventListener('click', () => {
    window.location.hash = '#Register'; // Redireciona para a âncora '#Register' ao clicar.
  });

  const buttonLogin = loginContainer.querySelector('#button-login'); // Seleciona o botão de login.
  buttonLogin.addEventListener('click', () => {
    const email = loginContainer.querySelector('#email-login'); // Captura o campo de e-mail.
    const password = loginContainer.querySelector('#key-login');
    // Captura o campo de senha.

  });

  return loginContainer;
};
