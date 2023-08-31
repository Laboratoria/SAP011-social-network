export default () => {
  const container = document.getElementById("app");
  const screen = `
    <section id="main-login">
    <h1>MyPet</h1>
    <p>Faça o login para continuar</p>
    
    <div id="form-container">
        <form action="">
        <label for="email">E-mail</label>
        <input class="input" type="text" id="email" placeholder="seunome@email.com" required email="email" />
        <label for="password">Senha</label>
        <input class="input" type="password" id="passwordId" required name="password" />
        <input id="submit" type="submit" class="login" value="Login" />
        </form>
    </div>

    <a href="#timeline" id="loginGoogle">Login com Google</a>

    <p><a href="#reset">Esqueceu a senha?</a></p>
    <p>Não tem conta?</p>
    <a href="#register" id="toRegister">Registre-se</a>
    
    <div class="decoration" id="green-ball"></div>
    </section>
`;

  container.innerHTML = screen;
};
