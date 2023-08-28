export const register = () => {
  const container = document.getElementById("app");
  const screen = `
        <section id="main-register">
        <h1>Crie sua conta</h1>
        <p><a href="#home">Já é registrado? Faça Login.</a></p>

        <div id="form-container">
        <img src="./img/photo-profile.png" alt="foto de perfil ilustrativa" />
        <form action="">
        <label for="name">Nome</label>
        <input class="input" type="text" id="nomeId" required name="name" />

        <label for="email">E-mail</label>
        <input
                class="input"
                type="text"
                id="emailId"
                placeholder="seunome@email.com"
                required
                name="email"
        />

        <label for="password">Senha</label>
        <input
                class="input"
                type="password"
                id="passwordId"
                required
                name="password"
        />

        <label for="date">Data de nascimento</label>
        <input class="input" type="date" id="birthId" />

        <input id="submit" type="submit" class="send" value="Enviar" />
        </form>
        </div>

        <p><a href="#welcome">Tela de boas-vindas</a></p>
        
        <div class="decoration" id="green-ball"></div>
        <div id="purple-div"></div>
        <div class="decoration" id="purple-ball">
                <img src="./img/purple-ball.png" alt="" id="half-ball"/>
        </div>
        </section>
        `;

  container.innerHTML = screen;
};
