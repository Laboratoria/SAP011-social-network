// importar a função que cria o usuário
import { registerEmail } from "../../firebase/firebase";

export default () => {
  const container = document.createElement('div');

  const template = `
    <section>
      <form id="cadastro-name">
        <label>Nome:</label>
        <input type="texto" placeholder="Digite seu nome..." name="nome"/>
      </form>

      <form id="cadastro-email"> 
        <label>Email</label>
        <input type= "email" placeholder="seu@email.com" name="email"/>
      </form>

      <form id="cadastro-password">
        <label>Senha:</label>
        <input type="password" placeholder= "Crie sua senha..." name="senha"/>
      </form>

      <form id="confirm-password">
        <label>Confirmação:</label>
        <input type="password" placeholder= "Confirme sua senha..." name="senha"/>
      </form>
    </section>

    <form id="register-login">
        <button id="confirm-btn">Cadastrar</button>
      </form>
    `;
  container.innerHTML = template;
  // criar evento click do confirm-btn

  // fazer a chamada da função registerEmail (localizada no firebase.js)


  // executar a função registerEmail através da manipulação de DOM
  const confirmBtn = container.querySelector('#confirm-btn');
  confirmBtn.addEventListener('click', () => {
    const email = document.getElementById('cadastro-email');
    const password = document.getElementById('cadastro-password');
    const cadastroName = document.getElementById('cadastro-name');
    const confirmPassword = document.getElementById('confirm-password');

    registerEmail(email, password, cadastroName, confirmPassword)
      .then(() => { //Será executado se der certo
        window.location.hash = "#feed";
      })
      .catch(() => { //Será executado se der erro
        error.innerHtml = "Erro ao logar!!"
      })
  });
  return container;
};

