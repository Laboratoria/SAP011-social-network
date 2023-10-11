// importar a função que cria o usuário
import { registerEmail } from '../../firebase/firebase';
import { login } from '../../firebase/firebase';

export default () => {
  const container = document.createElement('div');

  const template = `
    <section>
      <form id="cadastro-name">
        <label>Nome:</label>
        <input type="texto" id ="cadastro-name" placeholder="Digite seu nome..." name="nome"/>
      </form>

      <form id="cadastro-email"> 
        <label>Email</label>
        <input type= "email" id="email-id" placeholder="seu@email.com" name="email"/>
      </form>

      <form id="cadastro-password">
        <label>Senha:</label>
        <input type="password" id="password-id" placeholder= "Crie sua senha..." name="senha"/>
      </form>

      <form id="confirm-password">
        <label>Confirmação:</label>
        <input type="password" id="confirm-password" placeholder= "Confirme sua senha..." name="confirmação-senha"/>
      </form>
    </section>

    <form id="register-login">
        <button id="confirm-btn">Cadastrar</button>
      </form>
    `;
  container.innerHTML = template;
  // criar evento click do confirm-btn
  // const confirmBtn = document.getElementById('confirm-btn');
  // confirmBtn.addEventListener('click', () => {
  //   window.location.hash = '#feed';
  // });
  // fazer a chamada da função registerEmail (localizada no firebase.js)

  // executar a função registerEmail através da manipulação de DOM
  const confirmBtn = container.querySelector('#confirm-btn');
  confirmBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const email = container.querySelector('#email-id').value;
    const password = container.querySelector('#password-id').value;
    const cadastroName = container.querySelector('#cadastro-name').value;
    const confirmPassword = container.querySelector('#confirm-password').value;
    ;
    registerEmail(email, password, cadastroName, confirmPassword)
      .then(() => { // Será executado se der certo
        window.location.hash = '#feed';
      })
      .catch((error) => { //Será executado se der erro
        console.log(error)
        alert('erro') 
      })
  });
  return container;
};
