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

      <form id="confirmação-password">
        <label>Confirmação:</label>
        <input type="password" placeholder= "Confirme sua senha..." name="senha"/>
      </form>
    </section>
    `;
  container.innerHTML = template;
  return container;
  // executar a função registerEmail através da manipulação de DOM
};
