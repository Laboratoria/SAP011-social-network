import { resetLink } from "../../firebase/auth.js";

const screen = `
      <section id="main-reset">
      <img id="logo" src="./img/logo-login.png" alt="MyPet Logo">

      <div id="form-container">
        <h4>Redefinição de Senha</h4>
        <p>Confirme seu e-mail</p>

        <form action="">
          <label for="email">E-mail</label>
            <input
              class="input"
              type="text"
              id="email"
              placeholder="seunome@email.com"
              required
              name="email"
            />

            <p>
              Você receberá um e-mail com o link para cadastrar uma nova senha.
            </p>
            
            <input id="submit" type="submit" value="Enviar E-mail" />
                        
        </form>
      </div>

      <div class="decoration" id="green-ball"></div>
      <div class="decoration" id="half-ball">
        <img src="./img/purple-ball.png" alt="">
      </div>
      <div class="decoration" id="purple-ball"></div>
    </section>
    `;

export default () => {
  const content = document.getElementById("app");
  content.innerHTML = screen;

  const emailUser = document.getElementById("email");

  function newPassword() {
  
    const emailValue = emailUser.value;
  
      resetLink(emailValue);
    };

  const btn = document.getElementById("submit");

  btn.addEventListener("click", newPassword);
  
  };