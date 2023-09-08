import firstLogo from '../../assets/Logo-White.png'; // Importa a primeira imagem do logo.
import girl from '../../assets/Composition-Background.png'; // Importa a imagem de fundo com uma garota.

export default () => {
  const loginContainer = document.createElement('div'); // Cria um elemento div para o contêiner de login.
  loginContainer.classList.add('register-container'); // Adiciona a classe 'login-container' ao elemento.

  const content = `
      <header class='header-login'>
        <img src='${firstLogo}' alt='logo-eldoria" class='logo'> 
        <p>Dedicado a todos os entusiastas de literatura fantástica</p>
      </header>

      <main>
        <form class='section-register'>
          <h2> Criar uma nova conta <h2>
          <div class='input-register'>
          <input type='text' name='name' class='name-register' placeholder='Nome do usuário'>  
          <input type='email' name='email' class='email-register' placeholder='E-mail'>            
          <input type='password' name='password' class='key-register' placeholder='Senha'> 
          </div>
          <button type='button' class='btn-signIn' id='button-register'> Inscrever-se </button>
          <p class='text-register'>Já é registrado?</p>
          <button type='button' class='click-here' id='enter-here'> Entre aqui </button>
        </form>

      </main>
    `;

  loginContainer.innerHTML = content; // Insere o conteúdo HTML dentro do contêiner.

  const register = loginContainer.querySelector('#button-register');
  register.addEventListener('click', () => {
    window.location.hash = '#Home'; // Redireciona para a âncora '#Register' ao clicar.
  });

  const enter = loginContainer.querySelector('#enter-here');
  enter.addEventListener('click', () => {
    window.location.hash = '';
  });
  
  
  const user = loginContainer.querySelector('#name-register');
  const email = loginContainer.querySelector('#email-register');
  const password = loginContainer.querySelector('#key-register');

    // if (user.value === '' || email.value === '' || password.value === '') {
    //   alert('Por favor, preencha todos os campos.');
    // } else {
      
    // }
  

return loginContainer;

};
