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
        <form class='section-login'>
          <h2> Criar uma nova conta <h2>
          <input type='text' name='name' id='name-register' placeholder='Nome do usuário'>  
          <input type='email' name='email' id='email-register' placeholder='E-mail'>            
          <input type='password' name='password' id='key-register' placeholder='Senha'> 
          <button type='button' class='button-singIn' id='button-register'> Inscrever-se </button>
          <p>Já é registrado?</p><a href=''>Entre aqui</a>
        </form>

        <img src='${girl}' alt='girl-background' class='girl'> 
      </main>
    `;

  loginContainer.innerHTML = content; // Insere o conteúdo HTML dentro do contêiner.

  const register = loginContainer.querySelector('#button-register');
  register.addEventListener('click', () => {
    const user = loginContainer.querySelector('#name-register');
    const email = loginContainer.querySelector('#email-register');
    const password = loginContainer.querySelector('#key-register');

    // if (user.value === '' || email.value === '' || password.value === '') {
    //   alert('Por favor, preencha todos os campos.');
    // } else {
      
    // }
  
});
return loginContainer;
};
