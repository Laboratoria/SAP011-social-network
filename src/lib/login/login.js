import { signIn, signGoogle } from "../../firebase/auth.js";

const screen = `
      <section id="main-login">
      <img id="logo" src="./img/logo-login.png" alt="MyPet Logo">
      <p>Faça o login para continuar</p>

      <div id="form-container">
        <form action="">
          <label for="emailId">E-mail</label>
          <input
            class="input"
            type="text"
            id="emailId"
            placeholder="seunome@email.com"
            required
            email="email"
          />
          <label for="passwordId">Senha</label>
          <input
            class="input"
            type="password"
            id="passwordId"
            required
            name="password"
          />
          <input id="submit" type="submit" class="login" value="Login" />
        </form>
  
        <a href="#timeline" id="loginGoogle">Login com Google</a>

        <p><a href="#reset">Esqueceu a senha?</a></p>
        <p>Não tem conta?</p>
        <a href="#register" id="toRegister">Registre-se</a>
      </div>

      <div class="decoration" id="green-ball"></div>
      <div class="decoration" id="half-ball">
        <img src="./img/purple-ball.png" alt="">
      </div>
      <div id="purple-ball"></div>
      <img id="girl" src="./img/girl-image.png" alt="">
    </section>
`;

export default () => {
  const content = document.getElementById("app");
  content.innerHTML = screen;

  const emailId = document.getElementById("emailId");
  const passwordId = document.getElementById("passwordId");

  function captureData(event) {
    event.preventDefault();

    const emailUser = emailId.value;
    const passwordUser = passwordId.value;

    signIn(emailUser, passwordUser).then(location.hash = "timeline")
  }

  const submit = document.getElementById("submit");
  submit.addEventListener("click", captureData);

  function signInGoogle(event) {
  event.preventDefault();

    signGoogle().then(location.hash = "#timeline");
  }

  const loginGoogle = document.getElementById("loginGoogle");
  loginGoogle.addEventListener("click", signInGoogle);
};
