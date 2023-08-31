export default () => {
  const container = document.getElementById("app");
  const screen = `
      <section id="main-reset">
      <h1>MyPet</h1>

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
            
            <a href="#resetpassword" id="submit">Enviar</a>
            
        </form>
      </div>

      <div class="decoration" id="green-ball"></div>
      <div class="decoration" id="half-ball">
        <img src="./img/purple-ball.png" alt="">
      </div>
      <div class="decoration" id="purple-ball"></div>
    </section>
    `;

  container.innerHTML = screen;
};
