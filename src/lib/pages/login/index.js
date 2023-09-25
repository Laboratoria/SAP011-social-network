export const login = () => {
  const container = document.createElement("section");
  container.innerHTML = `
    <!--<form action="feed.html>" --!>
    <form class="login-container"> 
      <h3 class="titulo">LOGIN</h3>
        <label class="config-titulo">E-mail:</label>
          <input name="email" class="email-input" placeholder="seu@email.com">
          <div class="email error-none">E-mail e obrigatorio</div>
          <div class="email error-none">E-mail ivalido</div>
          <br>

        <label class="config-titulo">Senha:</label>
          <input type="password" class="key" placeholder="Digite sua senha.">
          <div class="password error-none">Senha e obrigatoria</div>
          <div class="password error-none">Senha invalida</div>
          <button type="button" class="email error" disabled id="enter">Entrar</button>

          
          <br>
          
          <label>Faça login com:</label>
          <button id="Google" >Google</button>
          <p>Não tem uma conta?<a href="/#register">Cadastre-se</a></p>
    `;

  // /*VALIDAÇÃO EM JAVA SCRIPT PARA PAG-LOGIN */

  const validateField = container.querySelector(".key");
  validateField.addEventListener("input", function (e) {
    e.preventDefault();
    toggleButtonsDisable();
    toggleEmailErrors();
    togglePasswordErrors();
  });

  const enterButton = container.querySelector("#enter");
  function toggleEmailErrors() {
    enterButton.addEventListener("click", function (e) {
      e.preventDefault();
      const errorEmail = container.querySelector(".email-input");
      if (errorEmail.classList.contains("error-none")) {
        menu.classList.remove("error-none");
        menu.classList.add("error-block");
      } else {
        errorEmail.classList.contains("error-none");
        menu.classList.add("error-block");
        menu.classList.remove("error-none");
      }
    });
  }

  function togglePasswordErrors() {
    enterButton.addEventListener("click", function (e) {
      e.preventDefault();
      const errorSenha = container.querySelector(".key");
      if (errorSenha.classList.contains("error-none")) {
        menu.classList.remove("error-none");
        menu.classList.add("error-block");
      } else {
        errorSenha.classList.contains("error-none");
        menu.classList.add("error-block");
        menu.classList.remove("error-none");
      }
    });
  }

  function toggleButtonsDisable() {
    const emailNotValid = isValidEmail();
    const passwordNotValid = isValidPassword();
    if (emailNotValid && passwordNotValid) {
      enterButton.disabled = true;
    } else {
        enterButton.removeAttribute("disabled");
    }
  }

  function isValidEmail() {
    const email = container.querySelector(".email-input").value;
    if (email) {
      return false;
    } else {
      return validateEmail(email);
    }
  }

  function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function isValidPassword() {
    const password = container.querySelector(".key").value;
    const validate = password.length - 1; //recebe o comprimento da variavel - caracteres da senha
    if (validate <= 7) {
      return false;
    } else {
      return togglePasswordErrors(password);
    }
  }
  return container;
};
