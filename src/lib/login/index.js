import firstLogo from '../../assets/Logo-White.png'; // Importa a primeira imagem do logo.
import girl from '../../assets/Composition-Background1.png'; // Importa a imagem de fundo com uma garota.
import googleIcon from '../../assets/Google-Logo.png'; // Importa o ícone do Google.

export default () => {
  const loginContainer = document.createElement('div'); // Cria um elemento div para o contêiner de login.
  loginContainer.classList.add('login-container'); // Adiciona a classe 'login-container' ao elemento.

  const content = `
      <div class='images'>
      <header class='header-login'>
        <img src='${firstLogo}' alt='logo-eldoria' class='logo-login'> 
        <p>Dedicado a todos os entusiastas de literatura fantástica</p>
      </header>
      <img src='${girl}' class='img-girl' alt='Desenho de uma menina lendo'>
      </div>
      
      <main>
        <form class='section-login'>
          <h2> Faça login no Eldoria </h2>
          <div class='input-login'> 
          <input type='email' name='email' id='email-login' class='login-email' placeholder='E-mail'>  
          <input type='password' name='password' id='key-login' class='login-password' placeholder='Senha'> 
          </div>
          <a class='button-password' href ='#password'> Esqueceu sua senha? </a>
          <button type='button' class='button-singIn' id='button-login'> Conecte-se </button>
          <p class='text-or'>ou</p>
            <button type='button' class='button-google'>
              <img src='${googleIcon}' class='icon-google' alt='logo-google'> Faça login com o Google </button>
          <p class='txt-account'>Não tem uma conta?</p>
          <a id='btn-register' href ='#register'> Inscrever-se </a>
        </form>
      </main>
    `;

  loginContainer.innerHTML = content; // Insere o conteúdo HTML dentro do contêiner.

  const buttonRegister = loginContainer.querySelector('#btn-register'); // Seleciona o botão de registro.
  buttonRegister.addEventListener('click', () => {
    window.location.hash = '#Register'; // Redireciona para a âncora '#Register' ao clicar.
  });

  const buttonLogin = loginContainer.querySelector('#button-login'); // Seleciona o botão de login.
  buttonLogin.addEventListener('click', () => {
    const email = loginContainer.querySelector('#email-login'); // Captura o campo de e-mail.
    const password = loginContainer.querySelector('#key-login');
    window.location.hash = '#Home'; // Redireciona para a âncora '#Register' ao clicar.

    // Captura o campo de senha.
    // Tenta fazer login com as informações fornecidas.
  //   login(email.value, password.value)
  //   .then(() => {
  //     window.location.hash = '#Home'; // Redireciona para a âncora '#Home' em caso de sucesso.
  //   })
  //   .catch((error) => {
  //     if (error.message === 'Firebase: Error (auth/user-not-found).') {
  //       alert('User not found'); // Exibe um alerta se o usuário não for encontrado.
  //     } else if (error.message === 'Firebase: Error (auth/wrong-password)') {
  //       alert('Password not found'); // Exibe um alerta se a senha estiver incorreta.
  //     }
  //   });
  // });

  // const googleButton = loginContainer.querySelector('.button-google');
  // googleButton.addEventListener('click', () => {
  //   // alert('botão google ok');
  //   googleLogin()
  //     .then(() => {
  //       window.location.hash = '#Home';
  //     })
  //     // eslint-disable-next-line no-unused-vars
  //     .catch((error) => {
  //       alert('Erro ao efetuar login com o Google!');
  //     });
  });

  return loginContainer;
};



