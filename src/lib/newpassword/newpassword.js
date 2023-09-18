import logo from "../../img/logo-login.png";
import ball from "../../img/logo-login.png";

const screen = `
      <section id="main-newpassword">
      <img id="logo" src="${logo}" alt="MyPet Logo">

      <div id="form-container">
          <h4>Redefinição de Senha</h4>
          <p>Confirme seu e-mail e senha</p>

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

            <label for="newpassword">Nova Senha</label>
            <input class="input" type="password" id="newpassword" placeholder="********" required name="newpassword"/>
                
            <label for="confirmpassword">Confirme sua senha</label>
            <input class="input" type="password" id="confirmpassword" placeholder="********" required name="confirmpassword"/>
                
            <a href="#home" id="submit">Enviar</a>
                
            </form>

            <div class="decoration" id="green-ball"></div>
            <div class="decoration" id="half-ball">
              <img src="${ball}" alt="">
            </div>
            <div class="decoration" id="purple-ball"></div>

      </div>
        
      </section>`;

export default () => {
  const content = document.getElementById("app");
  content.innerHTML = screen;

  const submit = document.getElementById("submit");
  submit.addEventListener("click", newPassword);

  function newPassword(event) {
    event.preventDefault();
  }
};
