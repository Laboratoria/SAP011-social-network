export default () => {
  const container = document.getElementById("app");
  const screen = `
        <section id="main-recuperacao">
        <h1>MyPet</h1>
        <h3>Redefinir de Senha</h3>
        <p>Confirme seu e-mail</p>

        <div id="form-container">
        <form action="">
        <label for="email">E-mail</label>
        <p><input class="input" type="text" id="email" placeholder="seunome@email.com" required name="email" /></p>

        <div class="espaço-redefinir">
        <a href="#resetpassword" id="btn-redefinir-senha">Enviar</a>
        </div>

        <p>Você receberá um e-mail com o link para cadastrar uma nova senha.</p>

        </form>

        </div>

        <div class="decoration" id="green-ball"></div>
        <div id="purple-div"></div>
        <div class="decoration" id="purple-ball">
            <img src="./img/purple-ball.png" alt="" id="half-ball"/>
        </div>
        <div class="decoration" id="girl-dog">
        <img src="./img/girl-image.png" alt=""></div>
        </section>
    `;

  container.innerHTML = screen;
};
