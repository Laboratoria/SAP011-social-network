// import { myFunction } from './lib/index.js';

// myFunction();

// import register from "./lib/register.js";
// import welcome from "./lib/welcome/welcome.js";

function getContent(fragmentId) {
  const pages = {
    home: ` Estamos na Home <br> Acesse a tela de boas-vindas do link: <a href="#welcome">Welcome</a>`,
    register: `<section id="main-register">
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

    <div class="decoration" id="green-ball"></div>
    <div id="purple-div"></div>
    <div class="decoration" id="purple-ball">
          <img src="./img/purple-ball.png" alt="" id="half-ball"/>
    </div>
  </section>`,

    welcome: `
    <section id="main-welcome">
        <h1>Boas-vindas!</h1>

        <h3>
          Seu cadastro foi <br />
          realizado com sucesso!
        </h3>

        <a href="#register" id="toTimeline">Ver postagens</a>

        <div class="decoration" id="green-ball"></div>
        <div class="decoration" id="purple-ball">
          <img src="./img/person-in-ball.png" alt="" />
        </div>
      </section>
    `,
  };
  return pages[fragmentId];
}

function loadContent() {
  const contentDiv = document.getElementById("app");
  const fragmentId = location.hash.substring(1);
  contentDiv.innerHTML = getContent(fragmentId);
}

if (!location.hash) {
  location.hash = "#home";
}

loadContent();

window.addEventListener("hashchange", loadContent);
