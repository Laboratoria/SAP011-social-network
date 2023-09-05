import firstLogo from '../../assets/Logo-White.png'; // Importa a primeira imagem do logo.
import girl from '../../assets/Composition-Background.png'; // Importa a imagem de fundo com uma garota.
import googleIcon from '../../assets/Google-Logo.png'; // Importa o ícone do Google.

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
        <div class='container-login'> 
          <h2> Faça login no Eldoria <h2>
          <div class='input-login'> 
          <input type='email' name='email' id='email-login' class='input-login' placeholder='E-mail'>  
          <input type='password' name='password' id='key-login' class='input-login' placeholder='Senha'> 
          </div>
          <button type='button' class='button-singIn' id='button-login'> Conecte-se </button>
          <button type='button' class='button-password'> Esqueceu sua senha? </button>
          <p class='text-or'>ou</p>
            <button type='button' class='button-google'>
              <img src='${googleIcon}' class='icon-google' alt='logo-google'> Faça login com o Google
            </button>
          <p class='txt-account'>Não tem uma conta?</p>
          <button type='button' id='button-register'> Inscrever-se </button>
        </form>

       
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
